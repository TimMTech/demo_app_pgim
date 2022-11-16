import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

const App: React.FC = () => {
  return (
    <div className="lg:flex-row h-screen w-screen flex flex-col">
      <LeftPanel />
      <div className="lg:h-full lg:w-[0]  w-full border"/>
      <RightPanel />
    </div>
  );
};

export default App;
