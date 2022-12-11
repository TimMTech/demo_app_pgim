import { languages } from "../../../utils/languages";
import { customTranslationStyles } from "../../../utils/customSelectStyle";
import Select from "react-select";

interface LanguagesProps {
  selectedLanguages: any;
  activeLanguage: string;
  sourceLanguages: { [key: string]: string };
  recentTranslations: {}[];
  handleEditorTranslate: (languages: string) => void;
  handleTranslationSelect: (value: any) => void;
}

const Languages: React.FC<LanguagesProps> = ({
  selectedLanguages,
  activeLanguage,
  sourceLanguages,
  recentTranslations,

  handleEditorTranslate,
  handleTranslationSelect,
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
          isMulti
          options={[{ label: "Select All", value: "*" }, ...languages]}
          className="relative z-[98] m-2"
          onChange={handleTranslationSelect}
          styles={customTranslationStyles}
        />
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-0 text-sm flex flex-wrap gap-3 p-2 max-h-[500px] overflow-y-auto font-prompt text-white border-b border-white/20 mx-2">
          <div className="w-[50px] h-[50px] bg-green-600 border rounded-lg flex items-center justify-center">
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
                onClick={() => handleEditorTranslate(label)}
              >
                {label}
              </div>
            );
          })}
        </div>
        <h2 className="p-2 text-center text-white font-prompt">
          Recent Translations
        </h2>
        <div className="flex flex-col gap-2 p-2 text-white font-prompt text-lg">
          {recentTranslations?.map((languages: any, index: number) => {
            const { language } = languages;
            return (
              <div
                className={`${
                  activeLanguage === language && "bg-white text-black"
                } cursor-pointer w-full text-center p-2 rounded-md bg-[rgba(44,49,57,0.6);]`}
                key={index}
                onClick={() => handleEditorTranslate(language)}
              >
                {language}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Languages;
