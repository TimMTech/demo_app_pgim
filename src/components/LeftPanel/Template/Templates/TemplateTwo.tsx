import { Editor } from "@tinymce/tinymce-react";
import { MouseEvent } from "react";
import Navigation from "../../Navigation";

interface TemplateTwoProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleSelectedTemplate: (e: MouseEvent<HTMLDivElement>) => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const TemplateTwo: React.FC<TemplateTwoProps> = ({
  step,
  selectedTemplate,
  handleSelectedTemplate,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div
      onClick={handleSelectedTemplate}
      id="template_2"
      className={`${
        selectedTemplate.template_2 && "border-[5px] border-red-500"
      } lg:w-[28vw] lg:h-[42vw] relative w-[250px] h-[400px] border border-black bg-white flex flex-col`}
    >
      <header className="w-full text-center border-b border-dotted border-black h-[250px]">
        <Editor
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          id="header-id-template-2"
          disabled={true}
          init={{
            height: "100%",
            width: "100%",
            menubar: false,
            resize: false,
            branding: false,
            statusbar: false,
          }}
        />
      </header>
      <section className="flex w-full h-full">
        <div className="flex flex-col h-full w-full border-r border-dotted border-black">
          <div className="flex items-center justify-center p-6 border-b border-dotted border-black ">
            <p className="text-black/40">Video</p>
          </div>
          <article className="flex-1 text-center  text-black/40">
            <Editor
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="article-id-1-template-2"
              disabled={true}
              init={{
                height: "100%",
                width: "100%",
                menubar: false,
                resize: false,
                branding: false,
                statusbar: false,
              }}
            />
          </article>
        </div>
        <div className="flex flex-col w-full h-full">
          <article className="flex-1 text-center  text-black/40">
            <Editor
              apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
              id="article-id-2-template-2"
              disabled={true}
              init={{
                height: "100%",
                width: "100%",
                menubar: false,
                resize: false,
                branding: false,
                statusbar: false,
              }}
            />
          </article>

          <div className="flex items-center justify-center p-6 border-t border-dotted border-black">
            <p className="text-black/40">Image</p>
          </div>
        </div>
      </section>
      <footer className="w-full  text-center border-t border-dotted border-black h-[250px]">
        <Editor
          apiKey="8cpyej0ctp2gi4r2g9n8gen3vw4xrukg7nd5i64sbthsjwza"
          id="footer-id-template-2"
          disabled={true}
          init={{
            height: "100%",
            width: "100%",
            menubar: false,
            resize: false,
            branding: false,
            statusbar: false,
          }}
        />
      </footer>
      {selectedTemplate.template_2 && (
        <Navigation
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
        />
      )}
    </div>
  );
};

export default TemplateTwo;
