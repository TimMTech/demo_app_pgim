import DemoDesktop from "../LeftPanel/Editors/Demos/DemoDesktop";
import DemoMobile from "../LeftPanel/Editors/Demos/DemoMobile";
import DesktopEditor from "../LeftPanel/Editors/DesktopEditor";
import MobileEditor from "../LeftPanel/Editors/MobileEditor";

import DeviceBar from "../LeftPanel/DeviceBar";

interface LeftPanelProps {
  step: number;
  editorContent: string;
  translatedContent: string;
  demoContent: string;
  deviceView: boolean;
  handleEditorChange: (content: string, editor: any) => void;
  handleDemoChange: (content: string) => void;
  handleDeviceView: () => void;
}

const LeftPanel: React.FC<LeftPanelProps> = ({
  step,
  editorContent,
  translatedContent,
  demoContent,
  deviceView,
  handleEditorChange,
  handleDemoChange,
  handleDeviceView,
}) => {
  return (
    <div className="lg:min-h-screen w-full h-full ">
      <DeviceBar deviceView={deviceView} handleDeviceView={handleDeviceView} />
      <div className="flex justify-center  w-full h-full ">
        {step === 1 && (
          <>
            {deviceView ? (
              <DemoMobile
                demoContent={demoContent}
                handleDemoChange={handleDemoChange}
              />
            ) : (
              <DemoDesktop
                demoContent={demoContent}
                handleDemoChange={handleDemoChange}
              />
            )}
          </>
        )}
        {step >= 2 && (
          <>
            {deviceView ? (
              <MobileEditor
                step={step}
                editorContent={editorContent}
                translatedContent={translatedContent}
                handleEditorChange={handleEditorChange}
              />
            ) : (
              <DesktopEditor
                step={step}
                editorContent={editorContent}
                translatedContent={translatedContent}
                handleEditorChange={handleEditorChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;
