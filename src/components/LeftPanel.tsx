import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineFileImage,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";

import { MdOutlineContactSupport } from "react-icons/md";

interface LeftPanelProps {
  preview: boolean;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ preview }) => {
  return (
    <div
      hidden={preview}
      className=" w-[165px] absolute z-[10] py-14 left-0 h-full text-sm bg-[#22262e] border-r-2 border-white/10"
    >
      <div className="flex flex-col items-start text-white justify-center gap-1 p-4 font-prompt ">
        <button className="flex items-center gap-2 w-full rounded-md py-2 pl-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineHome className="text-[#0d7ed9]" size={20} />
          <span>Home</span>
        </button>
        <button className="flex items-center  gap-2 w-full rounded-md py-2 pl-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineSetting className="text-[#0d7ed9]" size={20} />
          <span>Settings</span>
        </button>
        <button className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <AiOutlineSearch className="text-[#0d7ed9]" size={20} />
          <span>Search</span>
        </button>
        <button className="flex items-center gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <AiOutlineFileImage className="text-[#0d7ed9]" size={20} />
          <span>Library</span>
        </button>
        <button className="flex items-center  gap-2 w-full rounded-md py-2 pl-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineVideoCameraAdd className="text-[#0d7ed9]" size={20} />
          <span>Video</span>
        </button>
        <button className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <MdOutlineContactSupport className="text-[#0d7ed9]" size={20} />
          <span>Support</span>
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
