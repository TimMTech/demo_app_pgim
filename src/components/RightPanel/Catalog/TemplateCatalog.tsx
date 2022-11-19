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
    <div className="h-full flex flex-col">
      
      <div className="h-full w-full">
        <div className="flex w-full  ">
          <button className="bg-white w-full border p-2">Templates</button>
          <button className="bg-gray-500 w-full border p-2">Components</button>
          <button className="bg-gray-500 w-full border p-2">Fragments</button>
          <button className="bg-gray-500 w-full border p-2">Elements</button>
        </div>
        <div className="grid grid-cols-2 gap-10 p-4">
          <div className="flex flex-col gap-10 text-black">
            <div className="flex gap-2">
              <GrDocumentCloud size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentConfig size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentDownload size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentExcel size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentImage size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            
          </div>
          <div className="flex flex-col gap-10 text-black">
            <div className="flex gap-2">
              <GrDocumentMissing size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentLocked size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentNotes size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentOutlook size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            <div className="flex gap-2">
              <GrDocumentPerformance size={100} />
              <div className="shadow-lg shadow-black px-8">Text</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCatalog;
