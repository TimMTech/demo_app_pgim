import { languages } from "../../../utils/languages";
import { customTranslationStyles } from "../../../utils/customSelectStyle";
import Select from "react-select";
import classNames from "classnames";
import { AiFillDelete } from "react-icons/ai";

interface LanguagesProps {
  selectedLanguages: any;
  activeLanguage: string;
  originalLanguageActive: boolean;
  sourceLanguages: { [key: string]: string };

  handleViewOriginalContent: () => void;
  handleTranslationSelect: (language: any) => void;
  handleTranslationDelete: (value: string) => void;
  handleSwitchTranslation: (value: string) => void;
}

const Languages: React.FC<LanguagesProps> = ({
  selectedLanguages,
  activeLanguage,
  originalLanguageActive,
  sourceLanguages,
  handleViewOriginalContent,
  handleTranslationSelect,
  handleTranslationDelete,
  handleSwitchTranslation,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full h-full ">
        <Select
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
          }}
          placeholder="Select Languages"
          options={languages}
          className="relative z-[98] m-2"
          onChange={handleTranslationSelect}
          styles={customTranslationStyles}
        />
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
              <div key={index} className="relative">
                <div
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
                <AiFillDelete
                  onClick={() => handleTranslationDelete(value)}
                  className="absolute top-[-10px] right-[10px] text-white cursor-auto"
                  size={20}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Languages;
