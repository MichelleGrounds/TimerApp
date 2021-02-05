import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
import TimerDataView from "./components/TimerDataView";
import NavigationBar from "./components/NavigationBar";
import Graph from "./components/Graph";
import Account from "./components/Account";
import getData from "./getData";

const App = () => {
  const [occurrences, setOccurrences] = useState(0);
  const [data, setData] = useState({});
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const occs = localStorage.getItem("numberOfContractions");
    setOccurrences(occs);
    if (occs) setData(getData(occs));
  }, []);

  useEffect(() => {
    const occs = localStorage.getItem("numberOfContractions");

    if (occs) {
      setData(getData(occs));
    } else {
      setData({});
    }
  }, [occurrences]);

  const setTab = (newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <NavigationBar currentTab={currentTab} setTab={setTab} />
      {currentTab === 0 && <TimerDataView data={data} />}
      {currentTab === 0 && <Timer setOccurrences={setOccurrences} />}
      {currentTab === 1 && (
        <div>
          <Graph data={data} />
        </div>
      )}
      {currentTab === 2 && <Account setOccurrences={setOccurrences} />}
    </>
  );
};

export default App;
