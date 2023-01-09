import Navigation from "./Navigation";
import MediaUpload from "./Media/MediaUpload";
import Languages from "./Translation/Languages";

import Preview from "./Previews/Preview";
import { MouseEvent } from "react";

import { CgChevronDoubleLeft, CgChevronDoubleRight } from "react-icons/cg";

interface RightPanelProps {
  autoSaveText: boolean;
  step: number;
  closeRightPanel: boolean;
  imageFilePath: object[];
  videoFilePath: object[];
  mediaTypeDisplay: boolean;
  selectedLanguages: { [key: string]: string }[];
  activeLanguage: string;
  originalLanguageActive: boolean;
  sourceLanguages: { [key: string]: string };
  mediaView: { [key: string]: string };

  handleMediaViews: (e: MouseEvent<SVGElement>) => void;
  handleCloseRightPanel: () => void;
  handleViewOriginalContent: () => void;
  handleTranslationSelect: (language: any) => void;
  handleSwitchTranslation: (value: string) => void;
  handleImageOnSuccess: (response: any) => void;
  handleImageOnError: (response: any) => void;
  handleVideoOnSuccess: (response: any) => void;
  handleVideoOnError: (response: any) => void;
  handleMediaTypeDisplay: () => void;
  handleRevertChanges: () => void;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

const RightPanel: React.FC<RightPanelProps> = ({
  autoSaveText,
  step,
  closeRightPanel,

  imageFilePath,
  videoFilePath,
  mediaTypeDisplay,
  selectedLanguages,
  sourceLanguages,
  activeLanguage,
  originalLanguageActive,
  mediaView,

  handleMediaViews,
  handleCloseRightPanel,
  handleViewOriginalContent,
  handleTranslationSelect,
  handleSwitchTranslation,
  handleImageOnSuccess,
  handleImageOnError,
  handleVideoOnSuccess,
  handleVideoOnError,
  handleMediaTypeDisplay,
  handleRevertChanges,
  handleNextStep,
  handlePreviousStep,
}) => {
  return (
    <div
      className={`${
        closeRightPanel ? "w-[30px]" : "w-[300px] "
      } transition-width duration-200 ease absolute z-[10] py-14 right-0 h-full bg-[#22262e] border-l-2 border-white/10`}
    >
      <div className="flex">
        {closeRightPanel ? (
          <CgChevronDoubleLeft
            className="text-white cursor-pointer"
            size={30}
            onClick={handleCloseRightPanel}
          />
        ) : (
          <CgChevronDoubleRight
            className="text-white cursor-pointer"
            size={30}
            onClick={handleCloseRightPanel}
          />
        )}
      </div>
      <div
        className={`${
          closeRightPanel ? "opacity-0 cursor-auto pointer-events-none" : "opacity-100 "
        } transition duration-200 ease`}
      >
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
      <div
        className={`${
          closeRightPanel ? "opacity-0 cursor-auto pointer-events-none" : "opacity-100"
        } transition duration-200 ease`}
      >
        {autoSaveText && (
          <span className="absolute bottom-0 left-0 p-4 font-prompt font-bold  text-center text-white">
            Saving...
          </span>
        )}
        <button
          onClick={handleRevertChanges}
          className="absolute bottom-0 right-0 text-white p-4 font-prompt font-bold  text-center"
        >
          Revert Changes
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
