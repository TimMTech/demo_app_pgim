import classNames from "classnames";
import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineTablet,
} from "react-icons/ai";
import Map from "./Map";

interface PreviewProps {
  sourceLanguages: { [key: string]: string };
  selectedLanguages: { [key: string]: string }[];
  activeLanguage: string;
  originalLanguageActive: boolean;
  handleViewOriginalContent: () => void;
  handleSwitchTranslation: (label: string) => void;
}

const Preview: React.FC<PreviewProps> = ({
  sourceLanguages,
  selectedLanguages,
  activeLanguage,
  originalLanguageActive,
  handleSwitchTranslation,
  handleViewOriginalContent,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-full w-full">
        <div className="text-white flex  justify-center gap-8 mt-4">
          <AiOutlineDesktop size={60} />
          <AiOutlineMobile size={60} />
          <AiOutlineTablet size={60} />
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
            {sourceLanguages.label}
          </div>

          {selectedLanguages.map((languages: any, index: number) => {
            const { label } = languages;
            return (
              <div
                key={index}
                className={classNames(
                  "cursor-pointer w-[50px] h-[50px]  border rounded-lg flex items-center justify-center",
                  {
                    "bg-orange-400": activeLanguage === label,
                    "bg-gray-500": activeLanguage !== label,
                  }
                )}
                onClick={() => handleSwitchTranslation(label)}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preview;
