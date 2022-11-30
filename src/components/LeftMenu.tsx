import {
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineSearch,
  AiOutlineFileImage,
  AiOutlineVideoCameraAdd,
} from "react-icons/ai";
import { MdOutlineContactSupport } from "react-icons/md";

const LeftMenu: React.FC = () => {
  return (
    <div className="lg:min-h-screen lg:max-w-[165px] text-sm bg-[#22262e] max-h-[250px] h-full w-full border-r-2 border-white/10">
      <div className="lg:flex-col flex flex-row flex-wrap items-start text-white justify-center gap-1 p-4 font-prompt ">
        <div className="lg:justify-start lg:px-0 lg:pl-1 flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineHome size={20} />
          <span>Home</span>
        </div>
        <div className="lg:justify-start lg:px-0 lg:pl-1 flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineSetting size={20} />
          <span>Settings</span>
        </div>
        <div className="lg:justify-start lg:px-0 lg:pl-1 flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineSearch size={20} />
          <span>Search</span>
        </div>
        <div className="lg:justify-start lg:px-0 lg:pl-1 flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineFileImage size={20} />
          <span>Library</span>
        </div>
        <div className="lg:justify-start lg:px-0 lg:pl-1 flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[rgba(44,49,57,0.6);]">
          <AiOutlineVideoCameraAdd size={20} />
          <span>Video</span>
        </div>
        <div className="lg:justify-start lg:px-0 lg:pl-1 flex items-center justify-center gap-2 w-full rounded-md px-4 py-2 bg-[rgba(44,49,57,0.6);]">
          <MdOutlineContactSupport size={20} />
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
