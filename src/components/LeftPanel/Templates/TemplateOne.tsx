import { Editor } from "@tinymce/tinymce-react";

const TemplateOne: React.FC = () => {
  return (
    <div className="w-[25vw] h-[40vw] border border-black bg-white flex flex-col">
      <header className="w-full p-4 text-center border-b border-dotted border-black">
        <p className="text-black/40">Header</p>
      </header>
      <section className="flex w-full h-full">
        <div className="flex flex-col h-full w-full">
            <div className="border-b border-r border-dotted border-black flex items-center justify-center p-6">
                <p className="text-black/40">Image</p>
            </div>
            <article className="flex-1 border-r border-dotted border-black text-center p-6 text-black/40">
                Text Here
            </article>
        </div>
        <div className="flex flex-col w-full h-full">
            <article className="flex-1  text-center p-6 text-black/40">Text Here</article>
            <div className="border-t border-dotted border-black flex items-center justify-center p-6">
                <p className="text-black/40">Video</p>
            </div>
        </div>
      </section>
      <footer className="w-full p-4 text-center border-t border-dotted border-black">
        <p className="text-black/40">Footer</p>
      </footer>
    </div>
  );
};

export default TemplateOne;
