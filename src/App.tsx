import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import Navbar from "./components/Navbar";
import { useState, MouseEvent } from "react";

interface AppStateProps {
  [key: string]: boolean;
}

const App: React.FC<AppStateProps> = () => {
  const [step, setStep] = useState(1);

  const [selectedTemplate, setSelectedTemplate] = useState({
    template_1: false,
    template_2: false,
  });

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

  return (
    <div className="flex flex-col h-screen w-screen">
      <Navbar />
      <div className="lg:flex-row flex flex-col h-full w-full">
        <LeftPanel
          step={step}
          selectedTemplate={selectedTemplate}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          handleSelectedTemplate={handleSelectedTemplate}
        />
        <RightPanel />
      </div>
    </div>
  );
};

export default App;
