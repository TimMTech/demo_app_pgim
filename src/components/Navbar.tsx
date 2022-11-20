import { FcDocument } from "react-icons/fc";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full h-[85px] bg-white text-black font-prompt flex items-center px-20 border-b-2 border-black/10">
      <FcDocument size={75}/>
     
      <div className="flex items-center w-full justify-end  gap-4">
        <button className="text-blue-500 py-3 px-6 rounded-md border">
          Preview
        </button>
        <button className="bg-blue-500 text-white py-3 px-6 rounded-md">
          Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
