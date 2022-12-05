import { Editor } from "@tinymce/tinymce-react";

interface MobileEditorProps {

  editorContent: string;
  translatedContent: string;
  handleEditorChange: (content: string, editor: any) => void;
}

const MobileEditor: React.FC<MobileEditorProps> = ({

  editorContent,
  translatedContent,
  handleEditorChange,
}) => {
  return (
    <div className="w-full h-[1200px] flex flex-col items-center max-w-[576px]">
      <Editor
       
        value={editorContent}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        onEditorChange={handleEditorChange}
        id="mobileContent"
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
    `,
        }}
      />
      <div className="w-full border" />
      <Editor
        value={translatedContent}
        apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
        id="mobileContentTranslated"
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
    }
    `,
        }}
      />
    </div>
  );
};

export default MobileEditor;
