import TemplateCatalog from "./Catalog/TemplateCatalog"

const RightPanel:React.FC = () => {
    return (
        <div className="lg:min-w-[200px] lg:max-w-[500px] w-full h-full bg-white ">
            <TemplateCatalog />
        </div>
    )
}

export default RightPanel