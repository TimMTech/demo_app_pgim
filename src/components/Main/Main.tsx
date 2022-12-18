import TinyEditor from "./TinyEditor";
import ContentPreview from "./ContentPreview";

interface MainProps {
  step: number;
  editorContent: string;
  translatedContent: string;

  originalContentView: boolean;
  languageSwitcher: { [key: string]: string }[];
  activeLanguage: string;
  mediaView: { [key: string]: string };
  handleEditorChange: (content: string, editor: any) => void;
}

const Main: React.FC<MainProps> = ({
  step,
  editorContent,
  translatedContent,

  originalContentView,
  languageSwitcher,
  activeLanguage,
  mediaView,
  handleEditorChange,
}) => {
  return (
    <div className="h-full w-full relative z-[1] overflow-auto ">
      {step === 4 ? (
        <div className="flex justify-center items-center w-full h-full absolute  ">
          <ContentPreview
            editorContent={editorContent}
            languageSwitcher={languageSwitcher}
            activeLanguage={activeLanguage}
            originalContentView={originalContentView}
            mediaView={mediaView}
          />
        </div>
      ) : (
        <div className="flex justify-center items-center w-full h-full absolute top-[40px] h-[125vh] ">
          <TinyEditor
            editorContent={editorContent}
            translatedContent={translatedContent}
            originalContentView={originalContentView}
            handleEditorChange={handleEditorChange}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
