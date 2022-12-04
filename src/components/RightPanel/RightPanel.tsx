import Navigation from "./Navigation";
import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";
import User from "./UserForm/User";
import { ChangeEvent, FormEvent } from "react";

interface RightPanelProps {
  step: number;
  preview: boolean;
  strapiPOST: { [key: string]: any };
  imageFilePath: object[];
  videoFilePath: object[];
  selectedLanguages: any;
  activeLanguage: string;

  handleStrapiSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleGeneralContentChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleEditorTranslate: (languages: string) => void;
  handleMultiSelect: (value: any) => void;
  handleImageOnSuccess: (response: any) => void;
  handleImageOnError: (response: any) => void;
  handleVideoOnSuccess: (response: any) => void;
  handleVideoOnError: (response: any) => void;

  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  step,
  preview,
  strapiPOST,
  imageFilePath,
  videoFilePath,
  selectedLanguages,
  activeLanguage,

  handleStrapiSubmit,
  handleGeneralContentChange,
  handleEditorTranslate,
  handleMultiSelect,
  handleImageOnSuccess,
  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,

  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div
      hidden={preview}
      className=" w-[300px] absolute z-[10] py-14 right-0 h-full bg-[#22262e] border-l-2 border-black/10"
    >
      <Navigation
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      {step === 1 && (
        <User
          strapiPOST={strapiPOST}
          handleStrapiSubmit={handleStrapiSubmit}
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
