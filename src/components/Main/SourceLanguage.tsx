import { languages } from "../../utils/languages";
import { customSourceStyles } from "../../utils/customSelectStyle";
import Select from "react-select";

interface SourceLanguageProps {
  sourceLanguages: { [key: string]: string };
  handleSourceSelect: (value: any) => void;
}

const SourceLanguage: React.FC<SourceLanguageProps> = ({
  sourceLanguages,
  handleSourceSelect,
}) => {
  return (
    <div>
      <Select
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        className="relative z-[98]"
        options={languages}
        defaultValue={{
          label: sourceLanguages.label,
          value: sourceLanguages.value,
        }}
        onChange={handleSourceSelect}
        styles={customSourceStyles}
      />
    </div>
  );
};

export default SourceLanguage;
