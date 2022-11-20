import { MouseEvent } from "react";
import TemplateOne from "../Template/Templates/TemplateOne";
import TemplateTwo from "../Template/Templates/TemplateTwo";

interface ContentProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
}

const Content: React.FC<ContentProps> = ({
  step,
  selectedTemplate,
  handleNextStep,
  handlePreviousStep,
  handleSelectedTemplate
}) => {
  return (
    <div className="lg:px-24 w-full h-screen ">
      {step === 2 && selectedTemplate.template_1 && (
        <TemplateOne
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          selectedTemplate={selectedTemplate}
          handleSelectedTemplate={handleSelectedTemplate}
        />
      )}
      {step === 2 && selectedTemplate.template_2 && (
        <TemplateTwo
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

export default Content;
