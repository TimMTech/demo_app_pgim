import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import { useState, MouseEvent, useEffect } from "react";
import ScreenWarning from "./components/ScreenWarning";

import { Predictions } from "@aws-amplify/predictions";

interface AppStateProps {
  [key: string]: boolean;
}

const App: React.FC<AppStateProps> = () => {
  const [step, setStep] = useState(1);

  const [resizeWarning, setResizeWarning] = useState<boolean>(false);

  const [selectedTemplate, setSelectedTemplate] = useState({
    template_1: false,
    template_2: false,
  });

  const [selectedLanguages, setSelectedLanguages] = useState<[]>([]);
  const [activeLanguage, setActiveLanguage] = useState<string>("");

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([]);

  const handleDesignWidth = () => {
    if (window.innerWidth < 1450 && window.innerWidth > 1022) {
      setResizeWarning(true);
    } else {
      setResizeWarning(false);
    }
  };

  const handleSelectedTemplate = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    id === "template_1" &&
      setSelectedTemplate({
        ...selectedTemplate,
        template_1: true,
        template_2: false,
      });
    id === "template_2" &&
      setSelectedTemplate({
        ...selectedTemplate,
        template_2: true,
        template_1: false,
      });
  };

  const handleTranslate = async (language: string) => {
    setActiveLanguage(language);
    Predictions.convert({
      translateText: {
        source: {
          text: "Hello World",
        },
        targetLanguage: language,
      },
    })
      .then((response) => {
        console.log(response);
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
    setImageFilePath((prevState) => [...prevState, response]);
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
    window.addEventListener("load", handleDesignWidth);
    return () => {
      window.removeEventListener("resize load", handleDesignWidth);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <ScreenWarning resizeWarning={resizeWarning} step={step} />
      <Navbar
        step={step}
        selectedTemplate={selectedTemplate}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      <div className="lg:flex-row flex flex-col ">
        <LeftMenu />
        <LeftPanel
          step={step}
          selectedTemplate={selectedTemplate}
          handleSelectedTemplate={handleSelectedTemplate}
        />
        <RightPanel
          step={step}
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          handleTranslate={handleTranslate}
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
