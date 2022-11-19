import TemplateOne from "./Templates/TemplateOne";
import TemplateTwo from "./Templates/TemplateTwo";
import { MouseEvent } from "react";

interface TemplateSelectionProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({
  step,
  selectedTemplate,
  handleSelectedTemplate,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div className="lg:flex-row w-full h-full flex gap-3 items-center justify-center">
      
      <TemplateOne
        step={step}
        selectedTemplate={selectedTemplate}
        handleSelectedTemplate={handleSelectedTemplate}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      <TemplateTwo
        step={step}
        selectedTemplate={selectedTemplate}
        handleSelectedTemplate={handleSelectedTemplate}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
    </div>
  );
};

export default TemplateSelection;
