import TemplateOne from "./Templates/TemplateOne";
import TemplateTwo from "./Templates/TemplateTwo";
import { MouseEvent } from "react";

interface TemplateSelectionProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({
  step,
  selectedTemplate,
  handleSelectedTemplate,
}) => {
  return (
    <div className="lg:flex-row lg:min-h-screen w-full h-full flex gap-3 items-center justify-center py-24">
      <TemplateOne
        step={step}
        selectedTemplate={selectedTemplate}
        handleSelectedTemplate={handleSelectedTemplate}
      />
      <TemplateTwo
        step={step}
        selectedTemplate={selectedTemplate}
        handleSelectedTemplate={handleSelectedTemplate}
      />
    </div>
  );
};

export default TemplateSelection;
