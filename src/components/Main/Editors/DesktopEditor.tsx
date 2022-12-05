import { Editor } from "@tinymce/tinymce-react";
import { example } from "../../../utils/exampleContent";

interface DesktopEditorProps {
  editorContent: string;

  translatedContent: string;

  handleEditorChange: (content: string, editor: any) => void;
}

const DesktopEditor: React.FC<DesktopEditorProps> = ({
  editorContent,

  translatedContent,

  handleEditorChange,
}) => {
  return (
    <div className=" w-full h-[1200px] flex flex-col items-center w-[1200px] ">
      <Editor
       
        value={editorContent}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        onEditorChange={handleEditorChange}
        id="desktopContent"
        init={{
          placeholder: "Design Here...",
          height: "100%",
          width: "100%",
          menubar: false,
          resize: false,
          branding: false,
          statusbar: false,
          toolbar:
            "undo redo | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent | media",

          plugins: ["lists", "emoticons", "media"],

          content_style: `.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
    
            padding-left: 5px;
            font-family: prompt;
            font-weight:700;
            }
            .tox.tox-tinymce {
              background: transparent !important;
            }
            
            `,
        }}
      />
      <div className="w-full border" />

      <Editor
        value={translatedContent}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        id="desktopContentTranslated"
        init={{
          placeholder: "Translated Content Will Be Here...",
          height: "100%",
          width: "100%",
          menubar: false,
          resize: false,
          branding: false,
          statusbar: false,
          toolbar:
            "undo redo | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent | media",
          plugins: ["lists", "emoticons", "media"],

          content_style: `.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks)::before {
    
            padding-left: 5px;
            font-family: prompt;
            font-weight:700;
            }`,
        }}
      />
    </div>
  );
};

export default DesktopEditor;
