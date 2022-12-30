import { Editor } from "@tinymce/tinymce-react";

interface TinyEditorProps {
  activeLanguage: string;
  editorContent: string;
  translatedContent: { [key: string]: string };
  originalContentView: boolean;

  handleEditorChange: (content: string, editor: any) => void;
  handleTranslationChange: (content: string, editor: any) => void;
}

const TinyEditor: React.FC<TinyEditorProps> = ({
  activeLanguage,
  editorContent,
  translatedContent,
  originalContentView,

  handleEditorChange,
  handleTranslationChange,
}) => {
  return (
    <div className="h-[1200px] w-[1200px] flex flex-col items-center">
      {!originalContentView ? (
        <Editor
          value={translatedContent[activeLanguage]}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          onEditorChange={handleTranslationChange}
          id="translated"
          init={{
            height: "100%",
            width: "100%",
            setup: (editor) => {
              const content = translatedContent[activeLanguage];
              editor.setContent(content);
            },
            resize: false,
            menubar: true,
            branding: false,
            statusbar: false,
            contextmenu: "copy paste",
            forced_root_block: "p",
            remove_trailing_brs: true,
            toolbar:
              "image | link | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | lineheight | outdent indent | media",

            plugins: ["lists", "emoticons", "media", "table", "link", "image"],

            image_class_list: [
              { title: "Left", value: "w-full float-left" },
              { title: "Right", value: "w-full float-right" },
            ],
            content_style: `img {max-width: 100% !important; height: auto !important;} iframe {max-width: 100% !important; }`,
          }}
        />
      ) : (
        <Editor
          value={editorContent}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          onEditorChange={handleEditorChange}
          id="orginal"
          init={{
            height: "100%",
            width: "100%",
            resize: false,
            menubar: true,
            branding: false,
            statusbar: false,
            contextmenu: "copy paste",
            forced_root_block: "p",
            remove_trailing_brs: true,

            toolbar:
              "image | link | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | lineheight | outdent indent | media",

            plugins: ["lists", "emoticons", "media", "table", "link", "image"],

            image_class_list: [
              { title: "Left", value: "w-full float-left" },
              { title: "Right", value: "w-full float-right" },
            ],
            content_style: ` img {max-width: 100% !important; height: auto !important;}`,
          }}
        />
      )}
    </div>
  );
};

export default TinyEditor;
