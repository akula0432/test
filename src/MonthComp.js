import React, { useEffect, useState } from "react";

function MonthComp({ startDate, endDateMonth }) {
  const [percentage, setPercentage] = useState(0);

  function formatDate(date) {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const hours = date.getHours();
    const minutes = date.getMinutes().toString();
    return `${day} ${month} ${hours}:${minutes}`;
  }

  function getFinalMinutes(date1, date2) {
    const diffInMilliseconds = date1.getTime() - date2.getTime();
    const diffInMinutes = diffInMilliseconds / (1000 * 60);
    return diffInMinutes;
  }

  function currentMinutes() {
    const date = new Date();
    const currentDate = date - startDate;
    return currentDate / (1000 * 60);
  }

  function result() {
    const final = getFinalMinutes(endDateMonth, startDate);
    const current = currentMinutes();
    const result = (current * 100) / final;
    return result.toFixed(2);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPercentage(result);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>{formatDate(endDateMonth)}</div>
      <div className="percentage">
        {percentage === "100.00" ? "Success ✅" : `${percentage}%`}
      </div>
    </div>
  );
}

export default MonthComp;
