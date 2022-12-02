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
    <nav className="flex-2 w-full flex items-center justify-center gap-2">
      <BsArrowLeftCircleFill
        onClick={handlePreviousStep}
        className={classNames({
          hidden: step === 1,
        })}
        size={25}
      />
      <p>
        {step === 1 && "Create Content"}
        {step === 2 && "Choose Translation Language"}
        {step === 3 && "Final Preview"}
       
      </p>
      <BsArrowRightCircleFill
        onClick={handleNextStep}
        className={classNames({
          hidden: step === 4,
        })}
        size={25}
      />
    </nav>
  );
};

export default Navigation;
