import TemplateSelection from "./Template/TemplateSelection";
import { MouseEvent } from "react";
import Content from "./Content/Content";
import className from "classnames";

interface LeftPanelProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  editorContent: { [key: string]: string };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleEditorChange: (e: any, editor: any) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  step,
  selectedTemplate,
  editorContent,
  handleSelectedTemplate,
  handleEditorChange,
}) => {
  return (
    <div className="lg:min-h-screen w-full h-full">
      {step === 1 && (
        <TemplateSelection
          step={step}
          selectedTemplate={selectedTemplate}
          editorContent={editorContent}
          handleSelectedTemplate={handleSelectedTemplate}
          handleEditorChange={handleEditorChange}
        />
      )}
      {step >= 2 && (
        <Content
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

export default LeftPanel;
