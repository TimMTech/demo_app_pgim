import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import { useState, useEffect } from "react";
import ScreenWarning from "./components/ScreenWarning";
import { Predictions } from "@aws-amplify/predictions";
import { example } from "./utils/exampleContent";



const App: React.FC= () => {
  const [step, setStep] = useState(1);

  const [resizeWarning, setResizeWarning] = useState<boolean>(false);
  const [deviceView, setDeviceView] = useState<boolean>(false)

  const [editorContent, setEditorContent] = useState<string>("");
  const [translatedContent, setTranslatedContent] = useState<string>("");

  const [demoContent, setDemoContent] = useState<any>(example);

  const [selectedLanguages, setSelectedLanguages] = useState<[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<string>("");

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);

  const handleDesignWidth = () => {
    if (window.innerWidth < 1350 && window.innerWidth > 1022) {
      setResizeWarning(true);
    } else {
      setResizeWarning(false);
    }
  };

  const handleDeviceView = () => {
    setDeviceView(!deviceView)
  }

  const handleEditorChange = (content: string) => {
    setEditorContent(content)
  };

 
  const handleDemoChange = (content: string) => {
    setDemoContent(content);
  };

  const handleEditorTranslate = async (language: string) => {
    setActiveLanguage(language);
    Predictions.convert({
      translateText: {
        source: {
          text: editorContent
        },
        targetLanguage: language,
      },
    })
      .then((response) => {
        setTranslatedContent(response.text)
      })
      .catch((error) => console.log(error));
  };

  const handleMultiSelect = (value: any) => {
    setSelectedLanguages(value);
  };

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleImageOnSuccess = async (response: any) => {
    await fetch(response.thumbnailUrl)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        setImageFilePath((prevState) => [...prevState, { ...response, blob }]);
      });
  };

  const handleImageOnError = (response: any) => {
    console.log("error", response);
  };

  const handleVideoOnSuccess = (response: any) => {
    setVideoFilePath((prevState) => [...prevState, response]);
  };

  const handleVideoOnError = (response: any) => {
    console.log("error", response);
  };

  useEffect(() => {
    window.addEventListener("resize", handleDesignWidth);
    return () => {
      window.removeEventListener("resize", handleDesignWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("load", handleDesignWidth);
    return () => {
      window.removeEventListener("load", handleDesignWidth);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
     
      <Navbar
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      <div className="lg:flex-row flex flex-col ">
        <LeftMenu />
        <LeftPanel
          step={step}
          editorContent={editorContent}
          translatedContent={translatedContent}
          demoContent={demoContent}
          deviceView={deviceView}
          handleDemoChange={handleDemoChange}
          handleEditorChange={handleEditorChange}
          handleDeviceView={handleDeviceView}
        />
        <RightPanel
          step={step}
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          handleEditorTranslate={handleEditorTranslate}
          handleMultiSelect={handleMultiSelect}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
        />
      </div>
    </div>
  );
};

export default App;
