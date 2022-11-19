interface NavigationProps {
    step: number;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
}


const Navigation: React.FC<NavigationProps> = ({step, handleNextStep, handlePreviousStep}) => {
  return (
    <nav className="absolute top-[-10%] left-0 right-0 text-lg flex gap-4 items-center justify-center">
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
