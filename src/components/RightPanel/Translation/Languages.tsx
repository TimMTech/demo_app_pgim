import { languages } from "../../../utils/languages";
import { customTranslationStyles } from "../../../utils/customSelectStyle";
import Select from "react-select";

interface LanguagesProps {
  selectedLanguages: any;
  activeLanguage: string;
  sourceLanguages: { [key: string]: string };

  handleViewOriginalContent: () => void;
  handleTranslationSelect: (value: any) => void;
  handleSwitchTranslation: (label: string) => void;
}

const Languages: React.FC<LanguagesProps> = ({
  selectedLanguages,
  activeLanguage,
  sourceLanguages,
  handleViewOriginalContent,
  handleTranslationSelect,
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
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-0 text-sm flex flex-wrap gap-3 p-2 max-h-[500px] overflow-y-auto font-prompt text-white border-b border-white/20 mx-2">
          <div
            className="cursor-pointer w-[50px] h-[50px] bg-green-600 border rounded-lg flex items-center justify-center"
            onClick={handleViewOriginalContent}
          >
            {sourceLanguages.label}
          </div>

          {selectedLanguages.map((languages: any, index: number) => {
            const { label } = languages;
            return (
              <div
                key={index}
                className={`${
                  activeLanguage === label ? "bg-orange-400" : "bg-gray-400"
                } cursor-pointer w-[50px] h-[50px]  border rounded-lg flex items-center justify-center`}
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

export default Languages;
