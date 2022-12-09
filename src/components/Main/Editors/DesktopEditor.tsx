import { Editor } from "@tinymce/tinymce-react";

interface DesktopEditorProps {
  editorContent: string;
  translatedContent: string;
  translationView: boolean;
  handleEditorChange: (content: string, editor: any) => void;
}

const DesktopEditor: React.FC<DesktopEditorProps> = ({
  editorContent,
  translatedContent,
  translationView,
  handleEditorChange,
}) => {
 

  return (
    <div className=" w-full h-[1200px] flex flex-col items-center w-[1200px] ">
      {translationView ? (
        <Editor
          value={translatedContent}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          id="desktopContentTranslated"
          init={{
            placeholder: "Translated Content Will Be Here...",
            height: "100%",
            width: "100%",
            resize: false,
            branding: false,
            statusbar: false,
            toolbar:
              "undo redo | link | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent | media",
            plugins: ["lists", "emoticons", "media", "table", "link"],
          }}
        />
      ) : (
        <Editor
          value={editorContent}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          onEditorChange={handleEditorChange}
          id="desktopContent"
          init={{
            height: "100%",
            width: "100%",
            resize: false,
            branding: false,
            statusbar: false,
            toolbar:
              "undo redo | OptimizedVideo |  link | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent | media",

            plugins: ["lists", "emoticons", "media", "table", "link"],
            
          }}
        />
      )}
    </div>
  );
};

export default DesktopEditor;
