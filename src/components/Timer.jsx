import React, { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import moment from "moment";

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  margin: 2em 0;
`;

const Button = styled.button`
  border-radius: 50%;
  width: 5em;
  height: 5em;
  background-color: ${({ color }) => color};
  font-size: 200%;
  outline: none;
  border: none;
  cursor: pointer;
  filter: drop-shadow(0 0 1rem ${({ color }) => color});
`;

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
