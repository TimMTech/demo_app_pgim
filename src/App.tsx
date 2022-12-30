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

  //Auto Saving Text Notice Into DB

  const [autoSaveText, setAutoSavetext] = useState<boolean>(false);

  const debouncedAutoSave = useCallback(
    debounce(() => {
      setAutoSavetext(true);
      setTimeout(() => {
        setAutoSavetext(false);
      }, 1500);
    }, 2000),

    []
  );

  //
  const [step, setStep] = useState<number>(1);

  const [closeLeftPanel, setCloseLeftPanel] = useState<boolean>(false);

  const [mediaView, setMediaView] = useState<{ [key: string]: string }>({
    width: "desktop",
  });

  const [originalContentView, setOriginalContentView] = useState<boolean>(true);

  const [editorContent, setEditorContent] = useState<string | any>("");

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
  const [activeLanguage, setActiveLanguage] = useState<string | any>("");

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);
  const [mediaTypeDisplay, setMediaTypeDisplay] = useState<boolean>(true);

  const handleCloseLeftPanel = () => {
    setCloseLeftPanel(!closeLeftPanel);
  };

  const handleMediaViews = (e: MouseEvent<SVGElement>) => {
    const { id } = e.currentTarget;
    id === "mobile" && setMediaView({ width: "smartphone" });
    id === "desktop" && setMediaView({ width: "desktop" });
    id === "tablet" && setMediaView({ width: "tablet" });
  };

  const handleSourceSelect = (value: any) => {
    setSourceLanguages(value);
    localStorage.setItem("SourceLang", JSON.stringify(value));
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
    localStorage.setItem("ActiveLang", label);
  };

  const handleEditorChange = (content: string) => {
    if (content === "") {
      fetch(`http://localhost:5000/api/article/0/${sourceLanguages.value}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: `00001/0/${sourceLanguages.value}`,
        }),
      })
        .then((response) => {
          if (!response.ok) console.log("error");
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
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

        .catch((error) => {
          console.log(error);
        });
    }

    setEditorContent(content);
    localStorage.setItem("Orig", content);
    debouncedAutoSave();
  };

  const handleTranslationChange = (content: string) => {
    if (content === "") {
      fetch(`http://localhost:5000/api/article/1/${activeLanguage}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: `00001/1/${activeLanguage}`,
        }),
      })
        .then((response) => {
          if (!response.ok) console.log("error");
          return response.json();
        })
        .catch((error) => {
          console.log(error);
        });
      const filteredSelectedLanguages = selectedLanguages.filter(
        (languages: any) => languages.label !== activeLanguage
      );
      setSelectedLanguages(filteredSelectedLanguages);
      setOriginalContentView(true);
      localStorage.setItem(
        "SelectedLangs",
        JSON.stringify(filteredSelectedLanguages)
      );
    } else {
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
    }
    
    setTranslatedContent((prevState) => ({
      ...prevState,
      [activeLanguage]: content,
    }));
    localStorage.setItem(
      "Trans",
      JSON.stringify({ ...translatedContent, [activeLanguage]: content })
    );
    debouncedAutoSave();
  };

  const handleTranslationSelect = (value: any) => {
    if (selectedLanguages.includes(value)) {
      setActiveLanguage(value.label);
      return;
    }
    setSelectedLanguages((prevState) => [...prevState, value]);
    setActiveLanguage(value.label);
    localStorage.setItem(
      "SelectedLangs",
      JSON.stringify([...selectedLanguages, value])
    );
    localStorage.setItem("ActiveLang", value.label);
    Predictions.convert({
      translateText: {
        source: {
          text: editorContent,
          language: sourceLanguages.value,
        },
        targetLanguage: value.label,
      },
    })
      .then((response) => {
        setOriginalLanguageActive(false);
        setOriginalContentView(false);
        setTranslatedContent((prevState) => ({
          ...prevState,
          [value.label]: response.text,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleRevertChanges = () => {
    if (!originalContentView) {
      const revertedTranslatedContent = translatedContent[activeLanguage]
        .split(" ")
        .slice(0, -3)
        .join(" ");
      setTranslatedContent((prevState) => ({
        ...prevState,
        [activeLanguage]: revertedTranslatedContent,
      }));
    } else {
      const revertedEditorContent = editorContent
        .split(" ")
        .slice(0, -3)
        .join(" ");
      setEditorContent(revertedEditorContent);
    }
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

  useEffect(() => {
    localStorage.setItem("ActiveLang", "");
  }, []);

  useEffect(() => {
    const original = localStorage.getItem("Orig");
    setEditorContent(original);

    const translated = JSON.parse(localStorage.getItem("Trans") || "{}");
    setTranslatedContent(translated);

    const selectedLangs = JSON.parse(
      localStorage.getItem("SelectedLangs") || "[]"
    );
    const sourceLang = JSON.parse(
      localStorage.getItem("SourceLang") || `{"label":"en","value":"en"}`
    );

    setSelectedLanguages(selectedLangs);

    setSourceLanguages(sourceLang);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className={"absolute z-[1] top-0 bottom-0 left-0 right-0 "}>
      <Navbar />

      <DeviceBar
        sourceLanguages={sourceLanguages}
        handleSourceSelect={handleSourceSelect}
      />
      <div className="flex w-full h-full ">
        <LeftPanel
          handleCloseLeftPanel={handleCloseLeftPanel}
          closeLeftPanel={closeLeftPanel}
        />
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
          autoSaveText={autoSaveText}
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
          handleRevertChanges={handleRevertChanges}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      </div>
    </div>
  );
};

export default App;
