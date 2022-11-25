import { Editor } from "@tinymce/tinymce-react";
import { MouseEvent } from "react";

import classNames from "classnames";

interface TemplateOneProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  editorContent: { [key: string]: string };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleEditorChange: (e: any, editor: any) => void;
}

const TemplateOne: React.FC<TemplateOneProps> = ({
  step,
  selectedTemplate,
  editorContent,
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
          value={editorContent.header}
          onEditorChange={handleEditorChange}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          id="header"
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
          <div className="flex-1 h-full flex items-center justify-center p-6  border-b-2 border-dotted ">
            <p className="text-sm text-black/20">IMAGE</p>
          </div>
          <article className="relative flex-1 text-center">
            <Editor
              value={editorContent.article_1}
              onEditorChange={handleEditorChange}
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="article_1"
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
        <div className="flex flex-col w-full h-full">
          <article className="relative flex-1 text-center">
            <Editor
              value={editorContent.article_2}
              onEditorChange={handleEditorChange}
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="article_2"
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
          <div className="flex-1  flex items-center justify-center p-6  border-t-2 border-dotted ">
            <p className="text-sm text-black/20">VIDEO</p>
          </div>
        </div>
      </section>
      <footer className="relative h-full border-t-2 border-dotted h-[200px]">
        <Editor
          value={editorContent.footer}
          onEditorChange={handleEditorChange}
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          id="footer"
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
