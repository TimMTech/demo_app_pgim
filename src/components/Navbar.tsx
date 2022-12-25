import { FcDocument } from "react-icons/fc";
import { AiOutlineShareAlt } from "react-icons/ai";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="fixed z-[11] w-full bg-[#2c3139] text-white font-prompt flex items-center justify-between px-20  border-b-2 border-black/10">
      <FcDocument size={40} />
      <div className="flex items-center  gap-4">
        <AiOutlineShareAlt size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
