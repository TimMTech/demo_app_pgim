import DemoDesktop from "../LeftPanel/Editors/Demos/DemoDesktop";
import DemoMobile from "../LeftPanel/Editors/Demos/DemoMobile";
import DesktopEditor from "../LeftPanel/Editors/DesktopEditor";
import MobileEditor from "../LeftPanel/Editors/MobileEditor";

interface LeftPanelProps {
  step: number;
  editorContent: string;
  translatedContent: string;
  demoContent: string;
  handleEditorChange: (content: string, editor: any) => void;
  handleDemoChange: (content: string) => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  step,
  editorContent,
  translatedContent,
  demoContent,
  handleEditorChange,
  handleDemoChange,
}) => {
  return (
    <div className="lg:min-h-screen lg:px-24 flex w-full h-full">
      {step === 1 && (
        <>
          <DemoDesktop
            demoContent={demoContent}
            handleDemoChange={handleDemoChange}
          />
          <DemoMobile
            demoContent={demoContent}
            handleDemoChange={handleDemoChange}
          />
        </>
      )}
      {step >= 2 && (
        <>
          <DesktopEditor
            step={step}
            editorContent={editorContent}
            translatedContent={translatedContent}
            handleEditorChange={handleEditorChange}
          />
          <MobileEditor
            step={step}
            editorContent={editorContent}
            translatedContent={translatedContent}
            handleEditorChange={handleEditorChange}
          />
        </>
      )}
    </div>
  );
};

export default LeftPanel;
