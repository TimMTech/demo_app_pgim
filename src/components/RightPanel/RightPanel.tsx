import Navigation from "./Navigation";
import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";
import Options from "./General/Options";
import classNames from "classnames";
import Preview from "./Previews/Preview";
import { MouseEvent } from "react";

interface RightPanelProps {
  step: number;
  preview: boolean;

  imageFilePath: object[];
  videoFilePath: object[];
  mediaTypeDisplay: boolean;
  selectedLanguages: { [key: string]: string }[];
  activeLanguage: string;
  originalLanguageActive: boolean;
  sourceLanguages: { [key: string]: string };
  mediaView: { [key: string]: string };
  handleMediaViews: (e: MouseEvent<SVGElement>) => void;
  handleViewOriginalContent: () => void;

  handleOriginalContentSave: () => void;
  handleOrginalContentClear: () => void;

  handleTranslationSelect: (value: any) => void;
  handleSwitchTranslation: (label: string) => void;
  handleImageOnSuccess: (response: any) => void;

  handleImageOnError: (response: any) => void;
  handleVideoOnSuccess: (response: any) => void;
  handleVideoOnError: (response: any) => void;
  handleMediaTypeDisplay: () => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  step,
  preview,
  imageFilePath,
  videoFilePath,
  mediaTypeDisplay,
  selectedLanguages,
  sourceLanguages,
  activeLanguage,
  originalLanguageActive,
  mediaView,

  handleMediaViews,
  handleViewOriginalContent,
  handleOriginalContentSave,
  handleOrginalContentClear,
  handleTranslationSelect,
  handleSwitchTranslation,
  handleImageOnSuccess,

  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,
  handleMediaTypeDisplay,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div
      className={classNames(
        "transition duration-200 ease w-[300px] absolute z-[10] py-14 right-0 h-full bg-[#22262e] border-l-2 border-black/10",
        {
          "opacity-100 pointer-events-auto": preview === false,
          "opacity-0 pointer-events-none": preview === true,
        }
      )}
    >
      <Navigation
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />
      {step === 1 && (
        <Options
          handleOriginalContentSave={handleOriginalContentSave}
          handleOrginalContentClear={handleOrginalContentClear}
        />
      )}
      {step === 2 && (
        <MediaUpload
          imageFilePath={imageFilePath}
          videoFilePath={videoFilePath}
          mediaTypeDisplay={mediaTypeDisplay}
          handleImageOnSuccess={handleImageOnSuccess}
          handleImageOnError={handleImageOnError}
          handleVideoOnSuccess={handleVideoOnSuccess}
          handleVideoOnError={handleVideoOnError}
          handleMediaTypeDisplay={handleMediaTypeDisplay}
        />
      )}
      {step === 3 && (
        <Languages
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          originalLanguageActive={originalLanguageActive}
          sourceLanguages={sourceLanguages}
          handleViewOriginalContent={handleViewOriginalContent}
          handleTranslationSelect={handleTranslationSelect}
          handleSwitchTranslation={handleSwitchTranslation}
        />
      )}
      {step === 4 && (
        <Preview
          sourceLanguages={sourceLanguages}
          selectedLanguages={selectedLanguages}
          activeLanguage={activeLanguage}
          originalLanguageActive={originalLanguageActive}
          mediaView={mediaView}
          handleSwitchTranslation={handleSwitchTranslation}
          handleViewOriginalContent={handleViewOriginalContent}
          handleMediaViews={handleMediaViews}
        />
      )}
    </div>
  );
};

export default RightPanel;
