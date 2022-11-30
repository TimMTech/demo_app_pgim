import { FcDocument } from "react-icons/fc";
import Navigation from "./LeftPanel/Navigation";

interface NavbarProps {
  step: number;
 
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  step,
  
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <nav className="w-full bg-[#2c3139] text-white font-prompt flex items-center justify-between px-20  border-b-2 border-black/10">
      <FcDocument size={50} />
      <Navigation
        step={step}
  
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      <div className="flex-1 flex items-center w-full gap-4">
        <button className="text-blue-500 py-1 px-3 rounded-md ">
          Preview
        </button>
        <button className="bg-blue-500 text-white py-1 px-3 rounded-md">
          Publish
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
