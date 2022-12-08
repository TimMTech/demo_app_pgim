import DesktopEditor from "../Main/Editors/DesktopEditor";
import MobileEditor from "../Main/Editors/MobileEditor";


interface MainProps {
  editorContent: string;
  translatedContent: string;
  deviceView: boolean;
  translationView: boolean;
  handleEditorChange: (content: string, editor: any) => void;
}

const Main: React.FC<MainProps> = ({
  editorContent,
  translatedContent,
  deviceView,
  translationView,
  handleEditorChange,
}) => {
  return (
    <div className="h-full w-full relative z-[1] overflow-auto ">
      <div className="flex justify-center items-center w-full h-full absolute top-[40px] ">
        <>
          {deviceView ? (
            <MobileEditor
              editorContent={editorContent}
              translatedContent={translatedContent}
              translationView={translationView}
              handleEditorChange={handleEditorChange}
            />
          ) : (
            <DesktopEditor
              editorContent={editorContent}
              translatedContent={translatedContent}
              translationView={translationView}
              handleEditorChange={handleEditorChange}
            />
          )}
        </>
      </div>
    </div>
  );
};

export default Main;
