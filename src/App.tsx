import Main from "./components/Main/Main";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import { useState, useEffect, MouseEvent } from "react";
import { Predictions } from "@aws-amplify/predictions";
import DeviceBar from "./components/Main/DeviceBar";

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

  const [translatedContent, setTranslatedContent] = useState<string | any>("");

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

  const [languageSwitcher, setLanguageSwitcher] = useState<{}[]>([]);

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);
  const [mediaTypeDisplay, setMediaTypeDisplay] = useState<boolean>(true);
  const [preview, setPreview] = useState<boolean>(false);

  const handleMediaViews = (e: MouseEvent<SVGElement>) => {
    const { id } = e.currentTarget;
    id === "mobile" && setMediaView({ width: "smartphone" });
    id === "desktop" && setMediaView({ width: "desktop" });
    id === "tablet" && setMediaView({ width: "tablet" });
  };

  const handleViewOriginalContent = () => {
    setOriginalContentView(true);
    setOriginalLanguageActive(true);
    setActiveLanguage("");
  };

  const handlePreviewMode = () => {
    setPreview(!preview);
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
    setTranslatedContent(content);
  };

  const handleSourceSelect = (value: any) => {
    setSourceLanguages(value);
  };

  const handleOrginalContentClear = () => {
    setEditorContent("");
  };

  const handleSwitchTranslation = (label: string) => {
    const filterLangCode = languageSwitcher.filter(
      (code: any) => code.label === label
    );
    if (filterLangCode) {
      filterLangCode.map(({ value }: any) => setTranslatedContent(value));
      setActiveLanguage(label);
      setOriginalContentView(false);
      setOriginalLanguageActive(false);
    }
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
    })
      .then(async (response) => {
        setOriginalContentView(false);
        setTranslatedContent(response.text);

        await fetch(
          `http://localhost:5000/api/article/1/${response.language}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              key: `00001/1/${response.language}`,
              value: response.text,
            }),
          }
        )
          .then((response) => {
            if (!response.ok) console.log("error");
            return response.json();
          })
          .then((data) => {
            setLanguageSwitcher((prevState) => [
              ...prevState,
              { ...data, label: value.label },
            ]);
          })
          .catch((error) => {
            console.log("error", error);
          });
      })
      .catch((error) => {
        console.log("error", error);
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
      <Navbar preview={preview} handlePreviewMode={handlePreviewMode} />

      <DeviceBar handleSourceSelect={handleSourceSelect} />
      <div className="flex w-full h-full ">
        <LeftPanel preview={preview} />
        <Main
          step={step}
          editorContent={editorContent}
          translatedContent={translatedContent}
          originalContentView={originalContentView}
          languageSwitcher={languageSwitcher}
          activeLanguage={activeLanguage}
          mediaView={mediaView}
          handleEditorChange={handleEditorChange}
          handleTranslationChange={handleTranslationChange}
        />
        <RightPanel
          step={step}
          preview={preview}
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
          handleOrginalContentClear={handleOrginalContentClear}
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
