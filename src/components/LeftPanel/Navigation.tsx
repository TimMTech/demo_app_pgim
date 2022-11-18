interface NavigationProps {
    step: number;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
}


const Navigation: React.FC<NavigationProps> = ({step, handleNextStep, handlePreviousStep}) => {
  return (
    <nav className="">
      <button
        onClick={handlePreviousStep}
        disabled={step === 1}
        className={`${step === 1 && "opacity-20"}`}
      >
        Back
      </button>
      <button
        onClick={handleNextStep}
        disabled={step === 4}
        className={`${step === 4 && "opacity-20"}`}
      >
        Next
      </button>
    </nav>
  );
};

export default Navigation;
