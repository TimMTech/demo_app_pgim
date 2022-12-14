

interface Options {
  handleOriginalContentSave: () => void;
  handleOrginalContentClear: () => void;
}

const Options: React.FC<Options> = ({ handleOriginalContentSave, handleOrginalContentClear }) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full flex items-center justify-center p-2 mt-4 font-prompt text-white gap-2">
        <button
          onClick={handleOriginalContentSave}
          className="w-full bg-[#2c3139] py-4 rounded-md"
        >
          SAVE
        </button>
        <button onClick={handleOrginalContentClear} className="w-full bg-red-900/40 py-4 rounded-md">CLEAR</button>
      </div>
    </div>
  );
};

export default Options;
