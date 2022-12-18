import SourceLanguage from "./SourceLanguage";

interface DeviceBarProps {
  handleSourceSelect: (value: any) => void;
}

const DeviceBar: React.FC<DeviceBarProps> = ({ handleSourceSelect }) => {
  return (
    <div className=" absolute z-[10] w-full mt-10 flex justify-center items-center gap-2 p-1 bg-[#22262e] text-white">
      <SourceLanguage handleSourceSelect={handleSourceSelect} />
    </div>
  );
};
export default DeviceBar;
