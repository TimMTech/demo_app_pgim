import { FcDocument } from "react-icons/fc";
import { AiOutlineShareAlt } from "react-icons/ai";

interface NavbarProps {
  preview: boolean;
  handlePreviewMode: () => void;
 
}

const Navbar: React.FC<NavbarProps> = ({
  preview,
  handlePreviewMode,

}) => {
  return (
    <nav className="fixed z-[11] w-full bg-[#2c3139] text-white font-prompt flex items-center justify-between px-20  border-b-2 border-black/10">
      <FcDocument size={40} />
      <div className="flex items-center  gap-4">
        <AiOutlineShareAlt size={25}  />
        <button
          onClick={handlePreviewMode}
          className={`${
            preview && "bg-white"
          } text-blue-500 py-1 px-3 rounded-md `}
        >
          Preview
        </button>
        <button

          className="bg-blue-500 text-white py-1 px-3 rounded-md"
        >
          Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
