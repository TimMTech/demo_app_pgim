import { Editor } from "@tinymce/tinymce-react";
import { MouseEvent } from "react";
import classNames from "classnames";

interface TemplateOneProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  editorContent: { [key: string]: string };
  translatedContent: { [key: string]: string };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleEditorChange: (e: any, editor: any) => void;
}

const TemplateOne: React.FC<TemplateOneProps> = ({
  step,
  selectedTemplate,
  editorContent,
  translatedContent,
  handleSelectedTemplate,
  handleEditorChange,
}) => {
  return (
    <div
      onClick={handleSelectedTemplate}
      id="template_1"
      className={classNames("bg-white flex flex-col relative", {
        "border-[5px] border-red-500": selectedTemplate.template_1,
        "lg:w-[18vw] lg:h-[25vw] w-[200px] h-[300px]": step === 1,
        "lg:border-r-[2px] lg:border-l-[2px]  w-full h-full  border-0 border-blue-500":
          step >= 2,
      })}
    >
      <header className="relative h-full border-b-2 border-dotted h-[200px]">
        <Editor
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          value={step <= 1 ? "" : editorContent.header_template_1}
          initialValue={
            translatedContent.header_template_1_translated &&
            translatedContent.header_template_1_translated
          }
          onEditorChange={handleEditorChange}
          id="header_template_1"
          disabled={step <= 1}
          init={{
            height: "100%",
            width: "100%",
            menubar: false,
            resize: false,
            branding: false,
            statusbar: false,
            toolbar: step > 1,
            forced_root_block: "h1",
            external_plugins: {
              N1ED: "http://localhost:3001/public/tinymce/N1ED/plugin.min.js",
            },
          }}
        />
        <span
          className={`${
            step > 1 && "hidden"
          } text-sm absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-black/20`}
        >
          HEADER
        </span>
      </header>
      <section className="flex w-full h-full">
        <div className="flex flex-col h-full w-full border-r-2 border-dotted ">
          <div className=" relative flex-1 flex flex-col border-b-2 border-dotted ">
            <Editor
              disabled={step <= 1}
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="image_template_1"
              init={{
                width: "100%",
                height: "100%",
                menubar: false,
                resize: false,
                branding: false,
                statusbar: false,
                forced_root_block: "div",
                toolbar: step > 1 ? "undo redo" : false,
                plugins: [],
                content_style:
                  "div {caret-color: transparent; cursor: default;}",
                setup: (editor) => {
                  editor.on("keydown", (e) => {
                    return false;
                  });
                },
              }}
            />
            <span
              className={`${
                step > 1 && "hidden"
              } text-sm absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-black/20`}
            >
              IMAGE
            </span>
          </div>
          <article className="relative flex-1 text-center">
            <Editor
              value={step <= 1 ? "" : editorContent.article_1_template_1}
              initialValue={
                translatedContent.article_1_template_1_translated &&
                translatedContent.article_1_template_1_translated
              }
              onEditorChange={handleEditorChange}
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="article_1_template_1"
              disabled={step <= 1}
              init={{
                height: "100%",
                width: "100%",
                menubar: false,
                resize: false,
                branding: false,
                statusbar: false,
                toolbar:
                  step > 1
                    ? "undo redo | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent"
                    : false,
                plugins: ["lists", "emoticons"],
                external_plugins: {
                  N1ED: "http://localhost:3001/public/tinymce/N1ED/plugin.min.js",
                },
              }}
            />
            <span
              className={`${
                step > 1 && "hidden"
              } text-sm absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-black/20`}
            >
              CONTENT
            </span>
          </article>
        </div>
        <div className="flex flex-col h-full w-full ">
          <article className="relative flex-1 text-center">
            <Editor
              initialValue={
                translatedContent.article_2_template_1_translated &&
                translatedContent.article_2_template_1_translated
              }
              value={step <= 1 ? "" : editorContent.article_2_template_1}
              onEditorChange={handleEditorChange}
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="article_2_template_1"
              disabled={step <= 1}
              init={{
                height: "100%",
                width: "100%",
                menubar: false,
                resize: false,
                branding: false,
                statusbar: false,
                toolbar:
                  step > 1
                    ? "undo redo | sizeselect | styles  | fontfamily | fontsize  | bullist | numlist | emoticons | alignleft aligncenter alignright alignjustify | outdent indent "
                    : false,
                plugins: ["lists", "emoticons"],
                external_plugins: {
                  N1ED: "http://localhost:3001/public/tinymce/N1ED/plugin.min.js",
                },
              }}
            />
            <span
              className={`${
                step > 1 && "hidden"
              } text-sm absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-black/20`}
            >
              CONTENT
            </span>
          </article>
          <div className="relative flex-1 flex flex-col border-t-2 border-dotted ">
            <Editor
              disabled={step <= 1}
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="video_template_1"
              init={{
                width: "100%",
                height: "100%",
                menubar: false,
                resize: false,
                branding: false,
                statusbar: false,
                forced_root_block: "div",
                toolbar: step > 1 ? "undo redo | media" : false,
                plugins: ["lists", "emoticons", "media"],
                content_style:
                  "div {caret-color: transparent; cursor: default;}",
                setup: (editor) => {
                  editor.on("keydown", (e) => {
                    return false;
                  });
                },
              }}
            />
            <span
              className={`${
                step > 1 && "hidden"
              } text-sm absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-black/20`}
            >
              VIDEO
            </span>
          </div>
        </div>
      </section>
      <footer className="relative h-full border-t-2 border-dotted h-[200px]">
        <Editor
          initialValue={
            translatedContent.footer_template_1_translated &&
            translatedContent.footer_template_1_translated
          }
          value={step <= 1 ? "" : editorContent.footer_template_1}
          onEditorChange={handleEditorChange}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          id="footer_template_1"
          disabled={step <= 1}
          init={{
            height: "100%",
            width: "100%",
            menubar: false,
            resize: false,
            branding: false,
            statusbar: false,
            toolbar: step > 1,
            forced_root_block: "h2",
            external_plugins: {
              N1ED: "http://localhost:3001/public/tinymce/N1ED/plugin.min.js",
            },
          }}
        />
        <span
          className={`${
            step > 1 && "hidden"
          } text-sm absolute top-0 left-0 bottom-0 right-0 w-full h-full flex items-center justify-center text-black/20`}
        >
          FOOTER
        </span>
      </footer>
    </div>
  );
};

export default TemplateOne;
