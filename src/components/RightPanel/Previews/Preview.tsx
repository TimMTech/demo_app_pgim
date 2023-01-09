import classNames from "classnames";
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from "react-icons/ai";
import Map from "./Map";
import { MouseEvent } from "react";

interface PreviewProps {
  sourceLanguages: { [key: string]: string };
  selectedLanguages: { [key: string]: string }[];
  activeLanguage: string;
  originalLanguageActive: boolean;
  mediaView: { [key: string]: string };
  handleViewOriginalContent: () => void;
  handleSwitchTranslation: (value: string) => void;
  handleMediaViews: (e: MouseEvent<SVGElement>) => void;
}

const Preview: React.FC<PreviewProps> = ({
  sourceLanguages,
  selectedLanguages,
  activeLanguage,
  originalLanguageActive,
  mediaView,
  handleSwitchTranslation,
  handleViewOriginalContent,
  handleMediaViews,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-full w-full">
        <div className="text-white flex  justify-center gap-8 mt-4">
          <AiOutlineDesktop
            className={`${
              mediaView.width === "desktop" && "text-blue-500"
            } cursor-pointer`}
            id="desktop"
            size={60}
            onClick={handleMediaViews}
          />
          <AiOutlineMobile
            className={`${
              mediaView.width === "smartphone" && "text-blue-500"
            } cursor-pointer`}
            id="mobile"
            size={60}
            onClick={handleMediaViews}
          />
          <AiOutlineTablet
            className={`${
              mediaView.width === "tablet" && "text-blue-500"
            } cursor-pointer`}
            id="tablet"
            size={60}
            onClick={handleMediaViews}
          />
        </div>
        <Map />
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-0 text-sm flex flex-wrap gap-3 p-2 max-h-[500px] overflow-y-auto font-prompt text-white border-t border-white/20 mx-2">
          <div
            className={classNames(
              "cursor-pointer w-[50px] h-[50px] bg-green-600 border rounded-lg flex items-center justify-center",
              {
                "bg-orange-400": originalLanguageActive,
                "bg-green-600": !originalLanguageActive,
              }
            )}
            onClick={handleViewOriginalContent}
          >
            {sourceLanguages.value}
          </div>

          {selectedLanguages.map((languages: any, index: number) => {
            const { value } = languages;
            return (
              <div
                key={index}
                className={classNames(
                  "cursor-pointer w-[50px] h-[50px]  border rounded-lg flex items-center justify-center",
                  {
                    "bg-orange-400": activeLanguage === value,
                    "bg-gray-500": activeLanguage !== value,
                  }
                )}
                onClick={() => handleSwitchTranslation(value)}
              >
                {value}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preview;
