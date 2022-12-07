import { BiDevices } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

interface DeviceBarProps {
  translatedContent: string;
  handleDeviceView: () => void;
  handleTranslationView: () => void;
}

const DeviceBar: React.FC<DeviceBarProps> = ({
  translatedContent,
  handleDeviceView,
  handleTranslationView,
}) => {
  return (
    <div className=" absolute z-[10] w-full mt-10 flex justify-center items-center gap-2 p-2 bg-[#22262e] text-white">
      <BsGlobe
        className={`${
          translatedContent === "" && "text-white/20"
        } cursor-pointer`}
        size={20}
        onClick={handleTranslationView}
      />
      <BiDevices
        className="cursor-pointer"
        size={20}
        onClick={handleDeviceView}
      />
    </div>
  );
};
export default DeviceBar;
