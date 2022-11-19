import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

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
    <nav
      className={`${
        step === 2 && "hidden"
      } absolute top-[-12%] left-0 right-0 text-lg flex gap-4 items-center justify-center`}
    >
      <BsArrowLeftCircleFill
        onClick={handlePreviousStep}
        className={`${step === 1 && "opacity-20"}`}
        size={25}
      />

      <BsArrowRightCircleFill
        onClick={handleNextStep}
        className={`${step === 4 && "opacity-20"}`}
        size={25}
      />
    </nav>
  );
};

export default Navigation;
