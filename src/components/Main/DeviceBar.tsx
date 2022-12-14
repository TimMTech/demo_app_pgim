import { BiDevices } from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";

import classNames from "classnames";

import SourceLanguage from "./SourceLanguage";

interface DeviceBarProps {
  handleDeviceView: () => void;
  handleSourceSelect: (value: any) => void;
}

const DeviceBar: React.FC<DeviceBarProps> = ({
  handleDeviceView,

  handleSourceSelect,
}) => {
  return (
    <div className=" absolute z-[10] w-full mt-10 flex justify-center items-center gap-2 p-2 bg-[#22262e] text-white">
      <SourceLanguage handleSourceSelect={handleSourceSelect} />
      <BiDevices
        className="cursor-pointer"
        size={20}
        onClick={handleDeviceView}
      />
    </div>
  );
};
export default DeviceBar;
