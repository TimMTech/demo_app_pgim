import { Editor } from "@tinymce/tinymce-react";

interface DemoDesktopProps {
  demoContent: string;
  handleDemoChange: (content: string) => void;
}

const DemoDesktop: React.FC<DemoDesktopProps> = ({
  demoContent,
  handleDemoChange,
}) => {
  return (
    <div className="lg:px-24 flex-2  w-full h-screen flex flex-col">
      <Editor
        value={demoContent}
        onEditorChange={handleDemoChange}
        id="demoDesktop"
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        init={{
          width: "100%",
          height: "100%",
          menubar: false,
          resize: false,
          branding: false,
          statusbar: false,
          external_plugins: {
            N1ED: "http://localhost:3001/public/tinymce/N1ED/plugin.min.js",
          },
        }}
      />
    </div>
  );
};

export default DemoDesktop;
