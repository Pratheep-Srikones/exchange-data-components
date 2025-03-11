import FunnelChart, {
  FunnelChartProps,
} from "./components/PageComponents/FunnelChart";

// Example usage
const App = () => {
  const funnelData: FunnelChartProps = {
    stages: [
      {
        stage: "Applied",
        value: 22400,
      },
      {
        stage: "Accepted",
        value: 2253,
      },
      {
        stage: "Approved",
        value: 1123,
      },
      {
        stage: "Realized",
        value: 854,
      },
      {
        stage: "Completed",
        value: 318,
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <FunnelChart stages={funnelData.stages} />
    </div>
  );
};

export default App;
