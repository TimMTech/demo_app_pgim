import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineRobot,
  AiOutlineFileImage,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";

const LeftMenu: React.FC = () => {
  return (
    <div className="lg:w-[300px] lg:h-full bg-blue-800/70 min-w-[200px] h-[400px] w-full">
      <div className="lg:flex-col flex flex-row flex-wrap items-start text-white justify-center gap-8 p-4 font-prompt font-bold">
        <div className="flex items-center justify-center gap-2">
            <AiOutlineHome size={50}/>
            <span>Home</span>
        </div>
        <div className="flex items-center justify-center gap-2">
            <AiOutlineSetting size={50}/>
            <span>Settings</span>
        </div>
        <div className="flex items-center justify-center gap-2">
            <AiOutlineSearch size={50}/>
            <span>Search</span>
        </div>
        <div className="flex items-center justify-center gap-2">
            <AiOutlineRobot size={50}/>
            <span>Automation</span>
        </div>
        <div className="flex items-center justify-center gap-2">
            <AiOutlineFileImage size={50}/>
            <span>Library</span>
        </div>
        <div className="flex items-center justify-center gap-2">
            <AiOutlineVideoCameraAdd size={50}/>
            <span>Video Call</span>
        </div>
        <div className="flex items-center justify-center gap-2">
            <MdOutlineContactSupport size={50}/>
            <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
