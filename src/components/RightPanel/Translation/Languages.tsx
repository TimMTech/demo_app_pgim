import { MultiSelect } from "react-multi-select-component";
import { languages } from "../../../utils/languages";

interface LanguagesProps {
  selectedLanguages: any;
  activeLanguage: string;
  recentTranslations: {}[];

  handleEditorTranslate: (languages: string) => void;
  handleMultiSelect: (value: any) => void;
}

const Languages: React.FC<LanguagesProps> = ({
  selectedLanguages,
  activeLanguage,
  recentTranslations,

  handleEditorTranslate,
  handleMultiSelect,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full h-full ">
        <MultiSelect
          options={languages}
          className="relative z-[98] m-2"
          value={selectedLanguages}
          labelledBy={"Select"}
          onChange={handleMultiSelect}
          overrideStrings={{
            selectSomeItems: "Select Your Languages...",
            search: "Search For Languages",
            allItemsAreSelected: "All Languages Selected",
          }}
        />
        <div className="lg:grid lg:grid-cols-4 lg:gap-x-0 text-sm flex flex-wrap gap-3 p-2 max-h-[500px] overflow-y-auto font-prompt text-white border-b border-white/20 mx-2">
          <div className="w-[50px] h-[50px] bg-green-600 border rounded-lg flex items-center justify-center">
            en
          </div>

          {selectedLanguages.map((languages: any, index: number) => {
            const { label } = languages;
            return (
              <div
                key={index}
                className={`${
                  activeLanguage === label ? "bg-orange-400" : "bg-gray-400"
                } w-[50px] h-[50px]  border rounded-lg flex items-center justify-center`}
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
        <div className="p-2 text-white font-prompt text-lg">
          {recentTranslations?.map((languages: any, index: number) => {
            const { language } = languages;
            return (
              <div key={index} onClick={() => handleEditorTranslate(language)}>
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
