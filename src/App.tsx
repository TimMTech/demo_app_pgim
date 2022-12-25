import Main from "./components/Main/Main";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import { useState, useEffect, MouseEvent, useCallback } from "react";
import { Predictions } from "@aws-amplify/predictions";
import DeviceBar from "./components/Main/DeviceBar";
import debounce from "lodash/debounce";

const App: React.FC = () => {
  //Loading State For when App Building DOM
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const loadingRequest = () => {
    return new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
  };
  useEffect(() => {
    loadingRequest().then(() => {
      const loaderElement = document.querySelector(".loader");
      if (loaderElement) {
        loaderElement.remove();
        setIsLoading(!isLoading);
      }
    });
  });
  //

  const [step, setStep] = useState(1);

  const [mediaView, setMediaView] = useState<{ [key: string]: string }>({
    width: "desktop",
  });

  const [originalContentView, setOriginalContentView] = useState<boolean>(true);

  const [editorContent, setEditorContent] = useState<string>("");

  const [translatedContent, setTranslatedContent] = useState<{
    [key: string]: string;
  }>({});

  const [selectedLanguages, setSelectedLanguages] = useState<
    { [key: string]: string }[]
  >([]);
  const [sourceLanguages, setSourceLanguages] = useState<{
    [key: string]: string;
  }>({
    label: "en",
    value: "en",
  });

  const [originalLanguageActive, setOriginalLanguageActive] =
    useState<boolean>(false);
  const [activeLanguage, setActiveLanguage] = useState<string>("");

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);
  const [mediaTypeDisplay, setMediaTypeDisplay] = useState<boolean>(true);

  const handleMediaViews = (e: MouseEvent<SVGElement>) => {
    const { id } = e.currentTarget;
    id === "mobile" && setMediaView({ width: "smartphone" });
    id === "desktop" && setMediaView({ width: "desktop" });
    id === "tablet" && setMediaView({ width: "tablet" });
  };

  const handleSourceSelect = (value: any) => {
    setSourceLanguages(value);
  };

  const handleViewOriginalContent = () => {
    setOriginalContentView(true);
    setOriginalLanguageActive(true);
    setActiveLanguage("");
  };

  const handleSwitchTranslation = (label: string) => {
    setActiveLanguage(label);
    setOriginalContentView(false);
    setOriginalLanguageActive(false);
  };

  const handleEditorChange = (content: string) => {
    if (content === "") return;

    fetch(`http://localhost:5000/api/article/0/${sourceLanguages.value}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: `00001/0/${sourceLanguages.value}`,
        value: content,
      }),
    })
      .then((response) => {
        if (!response.ok) console.log("error");
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });

    setEditorContent(content);
  };

  const handleTranslationChange = (content: string) => {
    setTranslatedContent((prevState) => ({
      ...prevState,
      [activeLanguage]: content,
    }));
    fetch(`http://localhost:5000/api/article/1/${activeLanguage}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: `00001/1/${activeLanguage}`,
        value: content,
      }),
    })
      .then((response) => {
        if (!response.ok) console.log("error");
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTranslationSelect = (value: any) => {
    if (selectedLanguages.includes(value)) {
      setActiveLanguage(value.label);
      return;
    }
    setSelectedLanguages((prevState) => [...prevState, value]);
    setActiveLanguage(value.label);
    Predictions.convert({
      translateText: {
        source: {
          text: editorContent,
          language: sourceLanguages.value,
        },
        targetLanguage: value.label,
      },
    }).then(async (response) => {
      setOriginalLanguageActive(false);
      setOriginalContentView(false);
      setTranslatedContent((prevState) => ({
        ...prevState,
        [value.label]: response.text,
      }));
    });
  };

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleMediaTypeDisplay = () => {
    setMediaTypeDisplay(!mediaTypeDisplay);
  };

  const handleImageOnSuccess = async (response: any) => {
    
    setMediaTypeDisplay(true);
    setImageFilePath((prevState) => [...prevState, response]);
  };

  const handleImageOnError = (response: any) => {
    console.log("error", response);
  };

  const handleVideoOnSuccess = async (response: any) => {
    await fetch(response)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        setMediaTypeDisplay(false);
        setVideoFilePath((prevState) => [...prevState, { ...response, blob }]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleVideoOnError = (response: any) => {
    console.log("error", response);
  };

  if (isLoading) {
    return null;
  }

  return (
    <div className={"absolute z-[1] top-0 bottom-0 left-0 right-0"}>
      <Navbar />

      <DeviceBar handleSourceSelect={handleSourceSelect} />
      <div className="flex w-full h-full ">
        <LeftPanel />
        <Main
          step={step}
          editorContent={editorContent}
          translatedContent={translatedContent}
          originalContentView={originalContentView}
          activeLanguage={activeLanguage}
          mediaView={mediaView}
          handleEditorChange={handleEditorChange}
          handleTranslationChange={handleTranslationChange}
        />
        <RightPanel
          step={step}
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          mediaTypeDisplay={mediaTypeDisplay}
          selectedLanguages={selectedLanguages}
          originalLanguageActive={originalLanguageActive}
          activeLanguage={activeLanguage}
          sourceLanguages={sourceLanguages}
          mediaView={mediaView}
          handleMediaViews={handleMediaViews}
          handleViewOriginalContent={handleViewOriginalContent}
          handleSwitchTranslation={handleSwitchTranslation}
          handleTranslationSelect={handleTranslationSelect}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
          handleMediaTypeDisplay={handleMediaTypeDisplay}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </div>
  );
};

export default App;
