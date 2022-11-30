import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";

interface RightPanelProps {
  step: number;
  imageFilePath: object[];
  videoFilePath: object[];
  selectedLanguages: any;
  activeLanguage: string;

  handleEditorTranslate: (languages: string) => void;
  handleMultiSelect: (value: any) => void;
  handleImageOnSuccess: (response: any) => void;
  handleImageOnError: (response: any) => void;
  handleVideoOnSuccess: (response: any) => void;
  handleVideoOnError: (response: any) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  step,
  imageFilePath,
  videoFilePath,
  selectedLanguages,
  activeLanguage,

  handleEditorTranslate,
  handleMultiSelect,
  handleImageOnSuccess,
  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,
}) => {
  return (
    <div
      hidden={step === 1}
      className="lg:min-h-screen lg:max-w-[400px] w-full h-full bg-white border-l-2 border-black/10"
    >
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
      {step === 3 && (
        <Languages
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          handleEditorTranslate={handleEditorTranslate}
          handleMultiSelect={handleMultiSelect}
        />
      )}
    </div>
  );
};

export default RightPanel;
