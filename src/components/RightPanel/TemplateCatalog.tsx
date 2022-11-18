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
      <h1 className="text-3xl text-center text-white font-bold ">Choose Options</h1>
      <div className="w-full ">
        <div className="flex w-full">
          <button className="bg-white w-full border">Templates</button>
          <button className="bg-gray-500 w-full border">Components</button>
          <button className="bg-gray-500 w-full border">Fragments</button>
          <button className="bg-gray-500 w-full border">Elements</button>
        </div>
        <div className=" grid grid-cols-2 gap-10 ">
          <div className="flex flex-col">
            <div className="flex ">
              <GrDocumentCloud size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentConfig size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentDownload size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentExcel size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentImage size={100} />
              <div>Text</div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <GrDocumentMissing size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentLocked size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentNotes size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentOutlook size={100} />
              <div>Text</div>
            </div>
            <div className="flex">
              <GrDocumentPerformance size={100} />
              <div>Text</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCatalog;
