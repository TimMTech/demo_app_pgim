import TemplateCatalog from "./Catalog/TemplateCatalog";
import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";

interface RightPanelProps {
  step: number;
  imageFilePath: object[];
  videoFilePath: object[];
  selectedLanguages: any;
  activeLanguage: string;
  handleTranslate: (languages: string) => void;
  handleTestEditorTranslate: (languages: string) => void;
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
  handleTranslate,
  handleTestEditorTranslate,
  handleMultiSelect,
  handleImageOnSuccess,
  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,
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
      {step === 3 && (
        <Languages
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          handleTranslate={handleTranslate}
          handleTestEditorTranslate={handleTestEditorTranslate}
          handleMultiSelect={handleMultiSelect}
        />
      )}
    </div>
  );
};

export default RightPanel;
