import TemplateSelection from "./Template/TemplateSelection";
import { MouseEvent } from "react";
import Content from "./Content/Content";
import className from "classnames";

interface LeftPanelProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  step,
  selectedTemplate,
  handleSelectedTemplate,
}) => {
  return (
    <div className="lg:min-h-screen w-full h-full">
      {step === 1 && (
        <TemplateSelection
          step={step}
          selectedTemplate={selectedTemplate}
          handleSelectedTemplate={handleSelectedTemplate}
        />
      )}
      {step >= 2 && (
        <Content
          step={step}
          selectedTemplate={selectedTemplate}
          handleSelectedTemplate={handleSelectedTemplate}
        />
      )}
    </div>
  );
};

export default LeftPanel;
