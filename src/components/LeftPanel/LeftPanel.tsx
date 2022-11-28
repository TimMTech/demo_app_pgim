import TemplateSelection from "./Template/TemplateSelection";
import { MouseEvent } from "react";
import Content from "./Content/Content";
import TestEditor from "../LeftPanel/Template/Templates/TestEditor";
import ExampleEditor from "../LeftPanel/Template/Templates/ExampleEditor";

interface LeftPanelProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  editorContent: { [key: string]: string };
  testEditorContent: { [key: string]: string };
  translatedContent: { [key: string]: string };

  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleEditorChange: (e: any, editor: any) => void;
  handleTestEditorChange: (content: string, editor: any) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  step,
  selectedTemplate,
  editorContent,
  testEditorContent,
  translatedContent,

  handleSelectedTemplate,
  handleEditorChange,
  handleTestEditorChange,
}) => {
  return (
    <div className="lg:min-h-screen  w-full h-full">
      {/** 
      {step === 1 && (
        <ExampleEditor />
      )}
      */}

      {step === 1 && (
        <TemplateSelection
          step={step}
          selectedTemplate={selectedTemplate}
          editorContent={editorContent}
          translatedContent={translatedContent}
          handleSelectedTemplate={handleSelectedTemplate}
          handleEditorChange={handleEditorChange}
        />
      )}
      {/** 
      {step >= 2 && (
        <TestEditor
          step={step}
          testEditorContent={testEditorContent}
          translatedContent={translatedContent}
          handleEditorChange={handleEditorChange}
          handleTestEditorChange={handleTestEditorChange}
        />
      )}
      */}
      {step >= 2 && (
        <Content
          step={step}
          selectedTemplate={selectedTemplate}
          editorContent={editorContent}
          translatedContent={translatedContent}
          handleSelectedTemplate={handleSelectedTemplate}
          handleEditorChange={handleEditorChange}
        />
      )}
    </div>
  );
};

export default LeftPanel;
