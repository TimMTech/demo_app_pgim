import TinyEditor from "./TinyEditor";
import ContentPreview from "./ContentPreview";

interface MainProps {
  step: number;
  editorContent: string;
  translatedContent: { [key: string]: string };
  originalContentView: boolean;
  activeLanguage: string;
  mediaView: { [key: string]: string };
  handleEditorChange: (content: string, editor: any) => void;
  handleTranslationChange: (content: string, editor: any) => void;
}

const Main: React.FC<MainProps> = ({
  step,
  editorContent,
  translatedContent,
  originalContentView,
  activeLanguage,
  mediaView,
  
  handleEditorChange,
  handleTranslationChange,
}) => {
  return (
    <div className="h-full w-full relative z-[1] overflow-auto ">
      {step === 3 ? (
        <div className="flex justify-center items-center w-full h-full absolute  ">
          <ContentPreview
            translatedContent={translatedContent}
            editorContent={editorContent}
            activeLanguage={activeLanguage}
            originalContentView={originalContentView}
            mediaView={mediaView}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full absolute top-[40px] h-[125vh] ">
          <TinyEditor
            activeLanguage={activeLanguage}
            editorContent={editorContent}
            translatedContent={translatedContent}
            originalContentView={originalContentView}
       
            handleEditorChange={handleEditorChange}
            handleTranslationChange={handleTranslationChange}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
