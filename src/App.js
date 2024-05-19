import "./App.css";

import MonthComp from "./MonthComp";
import TwoWeeksComp from "./TwoWeeksComp";
import ThreeWeeksComp from "./ThreeWeeksComp";

function App() {
  const startDate = new Date(2024, 4, 19, 17, 30);
  const endDate2Weeks = new Date(2024, 5, 2, 17, 30);
  const endDate3Weeks = new Date(2024, 5, 9, 17, 30);
  const endDateMonth = new Date(2024, 5, 19, 17, 30);

  return (
    <div className="App">
      <div>
        <div className="start">Start date:</div>
        19 May 17:30
      </div>
      <TwoWeeksComp startDate={startDate} endDate2Weeks={endDate2Weeks} />
      <ThreeWeeksComp startDate={startDate} endDate3Weeks={endDate3Weeks} />
      <MonthComp startDate={startDate} endDateMonth={endDateMonth} />
    </div>
  );
}

export default App;
