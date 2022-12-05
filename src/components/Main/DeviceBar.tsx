import { BiDevices } from "react-icons/bi";

interface DeviceBarProps {
  deviceView: boolean;
  handleDeviceView: () => void;
}

const DeviceBar: React.FC<DeviceBarProps> = ({
 
  handleDeviceView,
}) => {
  return (
    <div className=" absolute z-[10] w-full mt-10 flex justify-center items-center p-2 bg-[#22262e] text-white">
      <BiDevices className="cursor-pointer" size={20} onClick={handleDeviceView} />
    </div>
  );
};
export default DeviceBar;
