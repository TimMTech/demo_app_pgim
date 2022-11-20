import TemplateCatalog from "./Catalog/TemplateCatalog";
import MediaUpload from "./Media/MediaUpload"

interface RightPanelProps {
  step: number;
}

const RightPanel: React.FC<RightPanelProps> = ({ step }) => {
  return (
    <div className="lg:min-w-[200px] lg:max-w-[500px] w-full h-full bg-white border-l-2 border-black/10">
      {step === 1 && (
        <TemplateCatalog />
      )}
      {step === 2 && (
        <MediaUpload />
      )}
    </div>
  );
};

export default RightPanel;
