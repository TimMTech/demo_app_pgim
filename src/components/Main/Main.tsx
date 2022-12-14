import TinyEditor from "./TinyEditor";

interface MainProps {
  editorContent: string;
  translatedContent: string;
  deviceView: boolean;
  originalContentView: boolean;
  handleEditorChange: (content: string, editor: any) => void;
}

const Main: React.FC<MainProps> = ({
  editorContent,
  translatedContent,
  deviceView,
  originalContentView,
  handleEditorChange,
}) => {
  return (
    <div className="h-full w-full relative z-[1] overflow-auto ">
      <div className="flex justify-center items-center w-full h-full absolute top-[40px] h-[125vh] ">
        <TinyEditor
          deviceView={deviceView}
          editorContent={editorContent}
          translatedContent={translatedContent}
          originalContentView={originalContentView}
          handleEditorChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default Main;
