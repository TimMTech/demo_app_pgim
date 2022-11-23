import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import LeftMenu from "./components/LeftMenu";
import { useState, MouseEvent, useEffect } from "react";
import ScreenWarning from "./components/ScreenWarning";

interface AppStateProps {
  [key: string]: boolean;
}

const App: React.FC<AppStateProps> = () => {
  const [step, setStep] = useState(1);

  const [resizeWarning, setResizeWarning] = useState(false);

  const [selectedTemplate, setSelectedTemplate] = useState({
    template_1: false,
    template_2: false,
  });

  const [imageFilePath, setImageFilePath] = useState<object[]>([]);
  const [videoFilePath, setVideoFilePath] = useState<object[]>([])

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
  

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  const handleImageOnSuccess = (response: any) => {
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
    return () => {
      window.removeEventListener("resize", handleDesignWidth);
    };
  }, []);
console.log(videoFilePath)
console.log(imageFilePath)
  return (
    <div className="flex flex-col h-screen w-screen">
      <ScreenWarning resizeWarning={resizeWarning} step={step} />
      <Navbar />
      <div className="lg:flex-row flex flex-col h-full w-full">
        <LeftMenu />
        <LeftPanel
          step={step}
          selectedTemplate={selectedTemplate}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleSelectedTemplate={handleSelectedTemplate}
        />
        <RightPanel
          step={step}
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
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
