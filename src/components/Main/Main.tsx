import DemoDesktop from "../Main/Editors/Demos/DemoDesktop";
import DemoMobile from "../Main/Editors/Demos/DemoMobile";
import DesktopEditor from "../Main/Editors/DesktopEditor";
import MobileEditor from "../Main/Editors/MobileEditor";

import DeviceBar from "./DeviceBar";

interface MainProps {
  step: number;
  editorContent: string;
  translatedContent: string;
  demoContent: string;
  deviceView: boolean;
  handleEditorChange: (content: string, editor: any) => void;
  handleDemoChange: (content: string) => void;
}

const Main: React.FC<MainProps> = ({
  step,
  editorContent,
  translatedContent,
  demoContent,
  deviceView,
  handleEditorChange,
  handleDemoChange,
}) => {
  return (
    <div className="h-full w-full relative z-[1] overflow-auto ">
      <div className="flex justify-center items-center w-full h-full absolute top-[40px] ">
        
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
      </div>
    </div>
  );
};

export default Main;
