import {
  GrDocumentCloud,
  GrDocumentConfig,
  GrDocumentDownload,
  GrDocumentExcel,
  GrDocumentImage,
  GrDocumentLocked,
  GrDocumentMissing,
  GrDocumentNotes,
  GrDocumentOutlook,
  GrDocumentPerformance,
} from "react-icons/gr";

const TemplateCatalog: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center text-white font-bold p-4">
        Choose Options
      </h1>
      <div className="w-full max-w-[500px]">
        <div className="flex w-full">
          <button className="bg-white w-full border p-2">Templates</button>
          <button className="bg-gray-500 w-full border p-2">Components</button>
          <button className="bg-gray-500 w-full border p-2">Fragments</button>
          <button className="bg-gray-500 w-full border p-2">Elements</button>
        </div>
        <div className=" grid grid-cols-2 gap-10 border-2 p-4">
          <div className="flex flex-col gap-10 text-white">
            <div className="flex gap-2">
              <GrDocumentCloud size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentConfig size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentDownload size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentExcel size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentImage size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
          </div>
          <div className="flex flex-col gap-10 text-white">
            <div className="flex gap-2">
              <GrDocumentMissing size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentLocked size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentNotes size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentOutlook size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentPerformance size={100} />
              <div className="shadow-lg shadow-white px-8">Text</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCatalog;
