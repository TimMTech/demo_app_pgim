interface ScreenWarningProps {
  resizeWarning: boolean;
  step: number;
}

const ScreenWarning: React.FC<ScreenWarningProps> = ({
  resizeWarning,
  step,
}) => {
  return (
    <>
      {resizeWarning && step >= 2 && (
        <div className="text-white  fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-[99] flex flex-col items-center justify-center">
          <h1 className="text-4xl font-prompt font-bold">
            Screen Size Too Small For Design
          </h1>
          <p className="text-2xl">Please Expand Screen Size For Optimal Design.</p>
        </div>
      )}
    </>
  );
};

export default ScreenWarning;
