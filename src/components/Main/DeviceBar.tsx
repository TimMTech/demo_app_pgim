import { BiDevices } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

import classNames from "classnames";

import SourceLanguage from "./SourceLanguage";

interface DeviceBarProps {
  translationView: boolean;
  translatedContent: string;
  handleDeviceView: () => void;
  handleTranslationView: () => void;
  handleSourceSelect: (value: any) => void;
}

const DeviceBar: React.FC<DeviceBarProps> = ({
  translationView,
  translatedContent,
  handleDeviceView,
  handleTranslationView,
  handleSourceSelect,
}) => {
  return (
    <div className=" absolute z-[10] w-full mt-10 flex justify-center items-center gap-2 p-2 bg-[#22262e] text-white">
      <SourceLanguage handleSourceSelect={handleSourceSelect} />
      <BsGlobe
        className={classNames("cursor-pointer", {
          "text-white/20 pointer-events-none": translatedContent === "",
          "text-blue-500": translationView,
        })}
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
