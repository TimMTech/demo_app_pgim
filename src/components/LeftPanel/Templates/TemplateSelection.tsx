import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";

const TemplateSelection: React.FC = () => {
  return (
    <div className="lg:flex-row w-full h-full flex gap-3 items-center justify-center">
      <TemplateOne />
      <TemplateTwo />
    </div>
  );
};

export default TemplateSelection;
