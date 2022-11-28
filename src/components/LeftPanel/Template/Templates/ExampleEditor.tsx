import { Editor } from "@tinymce/tinymce-react";
import { example } from "../../../../utils/exampleContent";
import { useState } from "react";

const ExampleEditor: React.FC = () => {
  const [exampleContent, setExampleContent] = useState<string>(example);

  const handleExampleChange = (content: string) => {
    setExampleContent(content);
  };

  return (
    <div className="lg:px-24  w-full h-screen flex flex-col">
      <Editor
        value={exampleContent}
        onEditorChange={handleExampleChange}
        id="example"
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

export default ExampleEditor;
