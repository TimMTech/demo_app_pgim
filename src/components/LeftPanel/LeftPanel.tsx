import Navigation from "./Navigation"
import TemplateSelection from "./Templates/TemplateSelection"

interface LeftPanelProps {
    step : number;
    handleNextStep: () => void;
    handlePreviousStep: () => void;
}

const LeftPanel:React.FC<LeftPanelProps> = ({step, handleNextStep, handlePreviousStep}) => {
    return (
        <div className="w-full h-full">
            <TemplateSelection />
        </div>
    )
}

export default LeftPanel