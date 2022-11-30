import { BiDevices } from "react-icons/bi";

interface DeviceBarProps {
  deviceView: boolean;
  handleDeviceView: () => void;
}

const DeviceBar: React.FC<DeviceBarProps> = ({
  deviceView,
  handleDeviceView,
}) => {
  return (
    <div className="w-full flex justify-center items-center w-full p-2 bg-[#22262e] text-white">
      <BiDevices size={20} onClick={handleDeviceView} />
    </div>
  );
};
export default DeviceBar;
