import TemplateSelection from "./Template/TemplateSelection";
import { MouseEvent } from "react";
import Content from "./Content/Content";
import className from "classnames";

interface LeftPanelProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  step,
  selectedTemplate,
  handleNextStep,
  handlePreviousStep,
  handleSelectedTemplate,
}) => {
  return (
    <div className="lg:min-h-screen w-full h-full">
      {step === 1 && (
        <TemplateSelection
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          selectedTemplate={selectedTemplate}
          handleSelectedTemplate={handleSelectedTemplate}
        />
      )}
      {step === 2 && (
        <Content
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          selectedTemplate={selectedTemplate}
          handleSelectedTemplate={handleSelectedTemplate}
        />
      )}
    </div>
  );
};

export default LeftPanel;
