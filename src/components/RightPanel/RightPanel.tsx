import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";
import User from "./UserForm/User";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";
import { ChangeEvent, FormEvent } from "react";

interface RightPanelProps {
  step: number;
  generalContent: { [key: string]: any };
  imageFilePath: object[];
  videoFilePath: object[];
  selectedLanguages: any;
  activeLanguage: string;
  closeRightPanel: boolean;

  handleGeneralContentSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleGeneralContentChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleEditorTranslate: (languages: string) => void;
  handleMultiSelect: (value: any) => void;
  handleImageOnSuccess: (response: any) => void;
  handleImageOnError: (response: any) => void;
  handleVideoOnSuccess: (response: any) => void;
  handleVideoOnError: (response: any) => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  step,
  generalContent,
  imageFilePath,
  videoFilePath,
  selectedLanguages,
  activeLanguage,
  closeRightPanel,

  handleGeneralContentSubmit,
  handleGeneralContentChange,
  handleEditorTranslate,
  handleMultiSelect,
  handleImageOnSuccess,
  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,
}) => {
  return (
    <div
      hidden={closeRightPanel}
      className=" w-[300px] absolute z-[10] py-14 right-0 h-full bg-[#22262e] border-l-2 border-black/10"
    >
      {step === 1 && (
        <User
          generalContent={generalContent}
          handleGeneralContentSubmit={handleGeneralContentSubmit}
          handleGeneralContentChange={handleGeneralContentChange}
        />
      )}
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
