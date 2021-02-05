import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { blackCoffee } from "./colors";
import Timer from "./components/Timer";
import TimeData from "./components/TimerData";

const HeaderContainer = styled.div`
  width: 100%;
  height: 15%;
  background: ${blackCoffee};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

const HeaderText = styled.div`
  color: white;
  font-size: 200%;
`;

const App = () => {
  const [occurrences, setOccurrences] = useState(0);

  useEffect(() => {
    setOccurrences(localStorage.getItem("numberOfContractions"));
  }, []);

  return (
    <>
      <HeaderContainer>
        <HeaderText>My Contractions</HeaderText>
      </HeaderContainer>
      <TimeData occurrences={occurrences} />
      <Timer setOccurrences={setOccurrences} />
    </>
  );
};

export default App;
