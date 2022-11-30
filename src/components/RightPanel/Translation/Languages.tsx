import { MultiSelect } from "react-multi-select-component";
import { languages } from "../../../utils/languages";

interface LanguagesProps {
  selectedLanguages: any;
  activeLanguage: string;

  handleEditorTranslate: (languages: string) => void;
  handleMultiSelect: (value: any) => void;
}

const Languages: React.FC<LanguagesProps> = ({
  selectedLanguages,
  activeLanguage,

  handleEditorTranslate,
  handleMultiSelect,
}) => {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="w-full h-full">
        <MultiSelect
          options={languages}
          className="relative z-[98]"
          value={selectedLanguages}
          labelledBy={"Select"}
          onChange={handleMultiSelect}
          overrideStrings={{
            selectSomeItems: "Select Your Languages...",
            search: "Search For Languages",
            allItemsAreSelected: "All Languages Selected",
          }}
        />
        <div className="lg:grid lg:grid-cols-4 lg:gap-6 flex flex-wrap gap-3 p-2 max-h-[500px] overflow-y-auto font-prompt text-white border-b">
          <div className="w-[75px] h-[75px] bg-green-600 border rounded-lg flex items-center justify-center">
            en
          </div>

          {selectedLanguages.map((languages: any, index: number) => {
            const { label } = languages;
            return (
              <div
                key={index}
                className={`${
                  activeLanguage === label ? "bg-orange-400" : "bg-gray-400"
                } w-[75px] h-[75px]  border rounded-lg flex items-center justify-center`}
                onClick={() => handleEditorTranslate(label)}
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
