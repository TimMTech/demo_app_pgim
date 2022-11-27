import TemplateSelection from "./Template/TemplateSelection";
import { MouseEvent } from "react";
import Content from "./Content/Content";
import TestEditor from "../LeftPanel/Template/Templates/TestEditor";

interface LeftPanelProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  editorContent: { [key: string]: string };
  testEditorContent: string;
  translatedContent: { [key: string]: string };
  testEditorTranslatedContent: string;
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleEditorChange: (e: any, editor: any) => void;
  handleTestEditorChange:(content: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  step,
  selectedTemplate,
  editorContent,
  testEditorContent,
  translatedContent,
  testEditorTranslatedContent,
  handleSelectedTemplate,
  handleEditorChange,
  handleTestEditorChange
}) => {
  return (
    <div className="lg:min-h-screen w-full h-full">
      {/*
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
      */}

      {step >= 2 && (
        <TestEditor
          step={step}
          
          testEditorContent={testEditorContent}
          translatedContent={translatedContent}
          testEditorTranslatedContent={testEditorTranslatedContent}
          handleEditorChange={handleEditorChange}
          handleTestEditorChange={handleTestEditorChange}
        />
      )}
      {/*<Content
          step={step}
          selectedTemplate={selectedTemplate}
          editorContent={editorContent}
          translatedContent={translatedContent}
          handleSelectedTemplate={handleSelectedTemplate}
          handleEditorChange={handleEditorChange}
        />
      */}
    </div>
  );
};

export default LeftPanel;
