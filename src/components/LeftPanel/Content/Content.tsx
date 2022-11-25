import { MouseEvent } from "react";
import TemplateOne from "../Template/Templates/TemplateOne";
import TemplateTwo from "../Template/Templates/TemplateTwo";

interface ContentProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  editorContent: { [key: string]: string };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleEditorChange: (e: any, editor: any) => void;
}

const Content: React.FC<ContentProps> = ({
  step,
  selectedTemplate,
  editorContent,
  handleEditorChange,
  handleSelectedTemplate,
}) => {
  return (
    <div className="lg:px-24  w-full h-screen ">
      {step >= 2 && selectedTemplate.template_1 && (
        <TemplateOne
          step={step}
          selectedTemplate={selectedTemplate}
          editorContent={editorContent}
          handleSelectedTemplate={handleSelectedTemplate}
          handleEditorChange={handleEditorChange}
        />
      )}
      {step >= 2 && selectedTemplate.template_2 && (
        <TemplateTwo
          step={step}
          selectedTemplate={selectedTemplate}
          editorContent={editorContent}
          handleSelectedTemplate={handleSelectedTemplate}
          handleEditorChange={handleEditorChange}
        />
      )}
    </div>
  );
};

export default Content;
