import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import classNames from "classnames";

interface NavigationProps {
  step: number;
  selectedTemplate: { [key: string]: boolean };
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  step,
  selectedTemplate,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <nav className="flex-2 w-full flex items-center justify-center gap-2">
      <BsArrowLeftCircleFill
        onClick={handlePreviousStep}
        className={classNames({
          hidden: step === 1,
        })}
        size={25}
      />
      <p>
        {step === 1 && "Select A Template" /*"Select A Template for other version"*/}
        {step === 2 && "Create Your Content"}
        {step === 3 && "Choose Translation Language"}
        {step === 4 && "Final Preview"}
      </p>
      <BsArrowRightCircleFill
        onClick={handleNextStep}
        className={classNames({
          hidden: step === 4,
          
          "pointer-events-none opacity-20":
            !selectedTemplate.template_1 &&
            !selectedTemplate.template_2 &&
            step === 1,
            
        })}
        size={25}
      />
    </nav>
  );
};

export default Navigation;
