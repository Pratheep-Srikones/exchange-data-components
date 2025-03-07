import { EntityChart } from "./components/PageComponents/EntityChart";
import LcChart from "./components/PageComponents/LcChart";
import { McChart } from "./components/PageComponents/McChart";
import RatioTable from "./components/PageComponents/RatioTable";

const App = () => {
  return (
    <div>
      <div className="flex p-4 gap-2">
        <div className="flex-1">
          <EntityChart />
        </div>
        <div className="flex-1">
          <McChart />
        </div>
      </div>
      {/* Ensuring LcChart and RatioTable have equal heights */}
      <div className="flex p-4 gap-2 h-[500px]">
        <div className="flex-1 h-full">
          <LcChart />
        </div>
        <div className="flex-1 h-full overflow-y-auto bg-white shadow-lg border border-black/15 rounded-lg">
          <RatioTable />
        </div>
      </div>
    </div>
  );
};

export default App;
