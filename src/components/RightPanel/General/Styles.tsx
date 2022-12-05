import { ChangeEvent } from "react";
import { SketchPicker } from "react-color";

interface StylesProps {
  editorBackground: string;
  handleEditorBackgroundColor: (color: any) => void;
}

const Styles: React.FC<StylesProps> = ({
  editorBackground,
  handleEditorBackgroundColor,
}) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full">
        <p className="text-sm text-center p-4">Background Color</p>
      </div>

      <SketchPicker
        width="auto"
        className="text-black"
        color={editorBackground}
        onChange={handleEditorBackgroundColor}
      />
    </div>
  );
};

export default Styles;
