const MediaUpload: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-full w-full ">
        <div className="flex items-center justify-evenly p-6 font-prompt text-white border-b">
          <button className="border px-6 py-3 rounded-lg bg-indigo-400">Upload Images</button>
          <button className="border px-6 py-3 rounded-lg bg-indigo-400">Upload Videos</button>
        </div>
      </div>
    </div>
  );
};

export default MediaUpload;
