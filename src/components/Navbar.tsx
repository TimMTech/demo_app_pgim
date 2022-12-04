import { FormEvent } from "react";
import { FcDocument } from "react-icons/fc";

interface NavbarProps {
  handlePreviewMode: () => void;
  handleStrapiSubmit: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handlePreviewMode, handleStrapiSubmit }) => {
  return (
    <nav className="fixed z-[11] w-full bg-[#2c3139] text-white font-prompt flex items-center justify-between px-20  border-b-2 border-black/10">
      <FcDocument size={50} />
      <div className="flex items-center  gap-4">
        <button
          onClick={handlePreviewMode}
          className="text-blue-500 py-1 px-3 rounded-md "
        >
          Preview
        </button>
        <button
          onClick={handleStrapiSubmit}
          
          className="bg-blue-500 text-white py-1 px-3 rounded-md"
        >
          Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
