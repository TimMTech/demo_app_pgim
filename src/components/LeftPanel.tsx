import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineFileImage,
  AiOutlineVideoCameraAdd,
  AiOutlineCalendar,
} from "react-icons/ai";

import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

import {
  MdOutlineContactSupport,
  MdOutlineAccountCircle,
  MdOutlineSettingsInputComponent,
} from "react-icons/md";

import { FaTasks } from "react-icons/fa";

interface LeftPanelProps {
  closeLeftPanel: boolean;
  handleCloseLeftPanel: () => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  closeLeftPanel,
  handleCloseLeftPanel,
}) => {
  return (
    <div
      className={`${
        closeLeftPanel ? "w-[30px]" : "w-[180px]"
      } transition-width duration-200 ease py-14 h-full text-xs bg-[#22262e] border-r-2 border-white/10`}
    >
      <div className="flex justify-end">
        {closeLeftPanel ? (
          <CgChevronDoubleRight
            className="text-white cursor-pointer"
            size={30}
            onClick={handleCloseLeftPanel}
          />
        ) : (
          <CgChevronDoubleLeft
            className="text-white cursor-pointer"
            size={30}
            onClick={handleCloseLeftPanel}
          />
        )}
      </div>
      <div
        className={`${
          closeLeftPanel ? "opacity-0 cursor-auto pointer-events-none" : "opacity-100"
        } transition duration-200 ease flex flex-col items-start text-white justify-center gap-1 p-4 font-prompt border-b border-white/20 mr-3`}
      >
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
          <MdOutlineAccountCircle className="text-[#0d7ed9]" size={20} />
          <span>Account</span>
        </button>
        <button className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <MdOutlineContactSupport className="text-[#0d7ed9]" size={20} />
          <span>Support</span>
        </button>
        <button className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <AiOutlineCalendar className="text-[#0d7ed9]" size={20} />
          <span>Calendar</span>
        </button>
        <button className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <FaTasks className="text-[#0d7ed9]" size={20} />
          <span>Tasks</span>
        </button>
      </div>

      <div
        className={`${
          closeLeftPanel ? "opacity-0 cursor-auto pointer-events-none" : "opacity-100"
        } transition duration-200 ease flex flex-col items-start text-white justify-center  gap-1 p-4 font-prompt mr-3`}
      >
        <p className="text-xs py-2">COMPONENTS</p>
        <button className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <MdOutlineSettingsInputComponent
            className="text-purple-500"
            size={20}
          />
          <span>EmbedHTML</span>
        </button>
        <button className=" flex items-center  gap-2 w-full rounded-md py-2 pl-2  bg-[rgba(44,49,57,0.6);]">
          <MdOutlineSettingsInputComponent
            className="text-purple-500"
            size={20}
          />
          <span>EmbedJS</span>
        </button>
      </div>
    </div>
  );
};

export default LeftPanel;
