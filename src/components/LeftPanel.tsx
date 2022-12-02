import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineFileImage,
  AiOutlineVideoCameraAdd,
  AiFillRightSquare,
  AiFillLeftSquare,
} from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";

interface LeftPanelProps {
  closeLeftPanel: boolean;
  handleCloseLeftPanel: () => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  closeLeftPanel,
  handleCloseLeftPanel,
}) => {
  return (
    <div hidden={closeLeftPanel} className="w-[165px] absolute z-[10] py-14 left-0 h-full text-sm bg-[#22262e] border-r-2 border-white/10">
      <div className="flex flex-col items-start text-white justify-center gap-1 p-4 font-prompt ">
        <div className="flex items-center gap-2 w-full rounded-md py-2 pl-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineHome size={20} />
          <span>Home</span>
        </div>
        <div className="flex items-center  gap-2 w-full rounded-md py-2 pl-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineSetting size={20} />
          <span>Settings</span>
        </div>
        <div className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <AiOutlineSearch size={20} />
          <span>Search</span>
        </div>
        <div className="flex items-center gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <AiOutlineFileImage size={20} />
          <span>Library</span>
        </div>
        <div className="flex items-center  gap-2 w-full rounded-md py-2 pl-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineVideoCameraAdd size={20} />
          <span>Video</span>
        </div>
        <div className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <MdOutlineContactSupport size={20} />
          <span>Support</span>
        </div>
      </div>
      
    </div>
  );
};

export default LeftPanel;
