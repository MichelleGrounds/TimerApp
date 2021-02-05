import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import TimeData from "./components/TimerData";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  const [occurrences, setOccurrences] = useState(0);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    setOccurrences(localStorage.getItem("numberOfContractions"));
  }, []);

  const setTab = (newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <NavigationBar currentTab={currentTab} setTab={setTab} />
      {currentTab === 0 && <TimeData occurrences={occurrences} />}
      {currentTab === 0 && <Timer setOccurrences={setOccurrences} />}
      {currentTab === 1 && <div>This is a graph</div>}
      {currentTab === 2 && <div>This is something</div>}
    </>
  );
};

export default App;
