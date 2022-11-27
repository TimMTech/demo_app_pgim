import TemplateOne from "./Templates/TemplateOne";
import TemplateTwo from "./Templates/TemplateTwo";
import { MouseEvent } from "react";

interface TemplateSelectionProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  editorContent: { [key: string]: string };
  translatedContent: { [key: string]: string };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleEditorChange: (e: any, editor: any) => void;
}

const TemplateSelection: React.FC<TemplateSelectionProps> = ({
  step,
  selectedTemplate,
  editorContent,
  translatedContent,
  handleSelectedTemplate,
  handleEditorChange,
}) => {
  return (
    <div className="lg:flex-row lg:min-h-screen w-full h-full flex gap-3 items-center justify-center py-24">
      <TemplateOne
        step={step}
        selectedTemplate={selectedTemplate}
        editorContent={editorContent}
        translatedContent={translatedContent}
        handleSelectedTemplate={handleSelectedTemplate}
        handleEditorChange={handleEditorChange}
      />
      <TemplateTwo
        step={step}
        selectedTemplate={selectedTemplate}
        editorContent={editorContent}
        translatedContent={translatedContent}
        handleSelectedTemplate={handleSelectedTemplate}
        handleEditorChange={handleEditorChange}
      />
    </div>
  );
};

export default TemplateSelection;
