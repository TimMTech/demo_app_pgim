import Navigation from "./Navigation";
import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";

import Preview from "./Previews/Preview";
import { MouseEvent } from "react";
import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

interface RightPanelProps {
  step: number;

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
    <div className="transition duration-200 ease w-[300px] absolute z-[10] py-14 right-0 h-full bg-[#22262e] border-l-2 border-white/10">
      <Navigation
        step={step}
        handleNextStep={handleNextStep}
        handlePreviousStep={handlePreviousStep}
      />

      {step === 1 && (
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
      {step === 2 && (
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
      {step === 3 && (
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
