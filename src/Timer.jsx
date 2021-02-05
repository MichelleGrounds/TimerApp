import React, { useState } from "react";
import styled from "styled-components";
import { aquamarine, bittersweet } from "./colors";

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
  width: 6em;
  height: 6em;
  background-color: ${({ color }) => color};
  font-size: 200%;
  outline: none;
  border: none;
  filter: drop-shadow(0 0 1rem ${({ color }) => color});
`;

const Timer = ({ setOccurrences }) => {
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
    const time = new Date();
    const occurrences = localStorage.getItem("numberOfContractions");

    setOccurrences(occurrences);

    timerStarted ? stopTimer(time, occurrences) : startTimer(time, occurrences);
  };

  return (
    <ButtonContainer>
      <Button onClick={onClick} color={timerStarted ? bittersweet : aquamarine}>
        {timerStarted ? "Stop" : "Start"}
      </Button>
    </ButtonContainer>
  );
};

export default Timer;
