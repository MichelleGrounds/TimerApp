import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import moment from "moment";
import { Button, ButtonContainer } from "./TimerButton";

const Timer = ({ setOccurrences }) => {
  const theme = useContext(ThemeContext);

  const [timerStarted, setTimerStarted] = useState(false);

  const startTimer = (time, occurrences) => {
    setTimerStarted(true);
    const numberOfContractionsSoFarInt = Number.parseInt(occurrences) || 0;

    localStorage.setItem(
      "numberOfContractions",
      numberOfContractionsSoFarInt + 1
    );

    localStorage.setItem(`${numberOfContractionsSoFarInt + 1}-start`, time);
  };

  const stopTimer = (time, occurrences) => {
    setTimerStarted(false);

    localStorage.setItem(`${occurrences}-stop`, time);
  };

  const onClick = () => {
    const time = moment();
    const occurrences = localStorage.getItem("numberOfContractions");

    setOccurrences(occurrences);

    timerStarted ? stopTimer(time, occurrences) : startTimer(time, occurrences);
  };

  return (
    <ButtonContainer>
      <Button
        onClick={onClick}
        color={timerStarted ? theme.bittersweet : theme.aquamarine}
      >
        {timerStarted ? "Stop" : "Start"}
      </Button>
    </ButtonContainer>
  );
};

export default Timer;
