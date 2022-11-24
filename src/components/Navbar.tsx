import { FcDocument } from "react-icons/fc";
import Navigation from "./LeftPanel/Navigation";

interface NavbarProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  step,
  selectedTemplate,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <nav className="w-full bg-white text-black font-prompt flex items-center justify-between px-20  border-b-2 border-black/10">
      <FcDocument size={75} />
      <Navigation
        step={step}
        selectedTemplate={selectedTemplate}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      <div className="flex-1 flex items-center w-full gap-4">
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
