import { Editor } from "@tinymce/tinymce-react";

interface TinyEditorProps {
  deviceView: boolean;
  editorContent: string;
  translatedContent: string;
  translationView: boolean;
  handleEditorChange: (content: string, editor: any) => void;
}

const TinyEditor: React.FC<TinyEditorProps> = ({
  deviceView,
  editorContent,
  translatedContent,
  translationView,
  handleEditorChange,
}) => {
  return (
    <div
      className={`${
        deviceView ? "w-[576px]" : "w-[1200px]"
      } w-full h-[1200px] flex flex-col items-center`}
    >
      {translationView ? (
        <Editor
          disabled
          value={translatedContent}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          id="desktopContentTranslated"
          init={{
            height: "100%",
            width: "100%",
            resize: false,
            menubar: false,
            branding: false,
            statusbar: false,
            toolbar: false,
            forced_root_block: "",
            remove_trailing_brs: true,
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
            menubar: true,
            branding: false,
            statusbar: false,
            contextmenu: "copy paste",
            forced_root_block: "",
            remove_trailing_brs: true,
            toolbar:
              "undo redo | image | link | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | lineheight | outdent indent | media",

            plugins: ["lists", "emoticons", "media", "table", "link", "image"],

            image_class_list: [
              { title: "Left", value: "w-full float-left" },
              { title: "Right", value: "w-full float-right" },
            ],
          }}
        />
      )}
    </div>
  );
};

export default TinyEditor;
