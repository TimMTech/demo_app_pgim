import { languages } from "../../utils/languages";
import { customSourceStyles } from "../../utils/customSelectStyle";
import Select from "react-select";

interface SourceLanguageProps {
  handleSourceSelect: (value: any) => void;
}

const SourceLanguage: React.FC<SourceLanguageProps> = ({
  handleSourceSelect,
}) => {
  return (
    <Select
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      className="relative z-[98] "
      options={languages}
      defaultValue={languages.filter((language) => language.label === "en")}
      onChange={handleSourceSelect}
      styles={customSourceStyles}
    />
  );
};

export default SourceLanguage;
