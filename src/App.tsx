import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { useState } from "react";

const App: React.FC = () => {

  const [step, setStep] = useState<number>(1)
  

  const handleNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevState) => prevState - 1);
  };

  return (
    <div className="lg:flex-row lg:items-center lg:justify-center lg:h-screen h-screen w-screen flex flex-col">
      <LeftPanel step={step} handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}/>
      <RightPanel />
    </div>
  );
};

export default App;
