import TemplateCatalog from "./Catalog/TemplateCatalog";
import MediaUpload from "./Media/MediaUpload";

interface RightPanelProps {
  step: number;
  imageFilePath: object[];
  videoFilePath: object[];
  handleImageOnSuccess: (response: any) => void;
  handleImageOnError: (response: any) => void;
  handleVideoOnSuccess: (response: any) => void;
  handleVideoOnError: (response: any) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  step,
  imageFilePath,
  videoFilePath,
  handleImageOnSuccess,
  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError
}) => {
  return (
    <div className="lg:min-h-screen lg:max-w-[400px] w-full h-full bg-white border-l-2 border-black/10">
      {step === 1 && <TemplateCatalog />}
      {step === 2 && (
        <MediaUpload
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
        />
      )}
    </div>
  );
};

export default RightPanel;
