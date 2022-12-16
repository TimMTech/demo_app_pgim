import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import classNames from "classnames";

interface NavigationProps {
  step: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  step,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <nav className="text-white text-sm font-prompt w-full flex items-center justify-center gap-2 py-3">
      <BsArrowLeftCircleFill
        onClick={handlePreviousStep}
        className={classNames("cursor-pointer", {
          hidden: step === 1,
        })}
        size={25}
      />
      <p>
        {step === 1 && "General"}
        {step === 2 && "Media"}
        {step === 3 && "Translations"}
        {step === 4 && "Preview"}
      </p>
      <BsArrowRightCircleFill
        onClick={handleNextStep}
        className={classNames("cursor-pointer", {
          hidden: step === 4,
        })}
        size={25}
      />
    </nav>
  );
};

export default Navigation;
