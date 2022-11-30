import { Editor } from "@tinymce/tinymce-react";

interface MobileEditorProps {
  step: number;
  editorContent: string;
  translatedContent: string;
  handleEditorChange: (content: string, editor: any) => void;
}

const MobileEditor: React.FC<MobileEditorProps> = ({
  step,
  editorContent,
  translatedContent,
  handleEditorChange,
}) => {
  return (
    <div className="w-full h-[1200px] flex flex-col items-center max-w-[500px]">
      <Editor
        value={editorContent}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        onEditorChange={handleEditorChange}
        id="mobileContent"
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
        value={translatedContent}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
       
        id="mobileContentTranslated"
        disabled={step <= 1}
        init={{
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

export default MobileEditor;
