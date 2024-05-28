import "./App.css";

import MonthComp from "./MonthComp";
import TwoWeeksComp from "./TwoWeeksComp";
import ThreeWeeksComp from "./ThreeWeeksComp";

function App() {
  const startDate = new Date(2024, 4, 28, 12);
  const endDate2Weeks = new Date(2024, 5, 11, 12, 0);
  const endDate3Weeks = new Date(2024, 5, 18, 12, 0);
  const endDateMonth = new Date(2024, 5, 28, 12, 0);

  return (
    <div className="App">
      <div>
        <div className="start">Start date:</div>
        28 May 12:00
      </div>
      <TwoWeeksComp startDate={startDate} endDate2Weeks={endDate2Weeks} />
      <ThreeWeeksComp startDate={startDate} endDate3Weeks={endDate3Weeks} />
      <MonthComp startDate={startDate} endDateMonth={endDateMonth} />
    </div>
  );
}

export default App;
