import TemplateSelection from "./Template/TemplateSelection";
import { MouseEvent } from "react";

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
    <div className="w-full h-full p-4">
      <TemplateSelection
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
        selectedTemplate={selectedTemplate}
        handleSelectedTemplate={handleSelectedTemplate}
      />
    </div>
  );
};

export default LeftPanel;
