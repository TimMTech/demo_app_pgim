import SourceLanguage from "./SourceLanguage";

interface DeviceBarProps {
  sourceLanguages: {[key:string]:string}
  handleSourceSelect: (value: any) => void;
}

const DeviceBar: React.FC<DeviceBarProps> = ({ sourceLanguages, handleSourceSelect }) => {
  return (
    <div className=" absolute z-[10] w-full mt-10 flex justify-center items-center gap-2 p-1 bg-[#22262e] text-white">
      <SourceLanguage sourceLanguages={sourceLanguages} handleSourceSelect={handleSourceSelect} />
    </div>
  );
};
export default DeviceBar;
