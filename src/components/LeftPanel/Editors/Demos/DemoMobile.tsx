import { Editor } from "@tinymce/tinymce-react";
interface DemoMobileProps {
  demoContent: string;
  handleDemoChange: (content: string) => void;
}

const DemoMobile: React.FC<DemoMobileProps> = ({
  demoContent,
  handleDemoChange,
}) => {
  return (
    <div className="w-full h-[1200px] flex flex-col items-center  max-w-[500px]">
      <Editor
        value={demoContent}
        onEditorChange={handleDemoChange}
        id="demoMobile"
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        init={{
          mobile: {
            menubar: true,
          },
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

export default DemoMobile;
