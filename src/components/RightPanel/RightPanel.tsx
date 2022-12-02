import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";

interface RightPanelProps {
  step: number;
  imageFilePath: object[];
  videoFilePath: object[];
  selectedLanguages: any;
  activeLanguage: string;
  closeRightPanel: boolean;

  handleCloseRightPanel: () => void;
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
  closeRightPanel,

  handleCloseRightPanel,
  handleEditorTranslate,
  handleMultiSelect,
  handleImageOnSuccess,
  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,
}) => {
  return (
    <div hidden={closeRightPanel} className=" w-[300px] absolute z-[10] py-14 right-0 h-full bg-[#22262e] border-l-2 border-black/10">
      {step === 1 && (
        <MediaUpload
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
        />
      )}
      {step === 2 && (
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
