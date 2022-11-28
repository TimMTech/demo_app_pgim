import { Editor } from "@tinymce/tinymce-react";

interface TestEditorProps {
  step: number;
  testEditorContent: { [key: string]: string };
  translatedContent: { [key: string]: string };

  handleEditorChange: (e: any, editor: any) => void;
  handleTestEditorChange: (content: string, editor: any) => void;
}

const TestEditor: React.FC<TestEditorProps> = ({
  step,
  testEditorContent,
  handleEditorChange,
  handleTestEditorChange,
}) => {
  return (
    <div className="lg:px-24 w-full h-screen flex flex-col">
      <Editor
        value={testEditorContent.content}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        onEditorChange={handleTestEditorChange}
        id="content"
        disabled={step <= 1}
        init={{
          placeholder: "Design Here...",
          height: "100%",
          width: "100%",
          menubar: false,
          resize: false,
          branding: false,
          statusbar: false,
          toolbar:
            step > 1
              ? "undo redo | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent | media"
              : false,
          plugins: ["lists", "emoticons", "media"],
          external_plugins: {
            N1ED: "http://localhost:3001/public/tinymce/N1ED/plugin.min.js",
          },

          content_style: `.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
    padding-left: 5px;
    font-family: prompt;
    font-weight:700;
    }
    `,
          
        }}
      />
      <div className="w-full border" />
      <Editor
        value={testEditorContent.translated_content}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        onEditorChange={handleTestEditorChange}
        id="translated_content"
        disabled={step <= 1}
        init={{
          id: "test_editor_translated",
          placeholder: "Translated Content Will Be Here...",
          height: "100%",
          width: "100%",
          menubar: false,
          resize: false,
          branding: false,
          statusbar: false,
          toolbar:
            step > 1
              ? "undo redo | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent | media"
              : false,
          plugins: ["lists", "emoticons", "media"],
          external_plugins: {
            N1ED: "http://localhost:3001/public/tinymce/N1ED/plugin.min.js",
          },
          content_style: `.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
    
    padding-left: 5px;
    font-family: prompt;
    font-weight:700;
    }
    `,
        }}
      />
    </div>
  );
};

export default TestEditor;
