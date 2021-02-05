import React, { useState } from "react";
import styled from "styled-components";
import { aquamarine, bittersweet } from "./colors";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2em 0;
`;

const Button = styled.button`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  background-color: ${({ started }) => (started ? bittersweet : aquamarine)};
  font-size: 200%;
  outline: none;
`;

const Timer = () => {
  const [timeStarted, setTimeStarted] = useState(null);

  const onClick = () => {
    if (timeStarted) {
      setTimeStarted(null);
      const numberOfContractionsSoFar = localStorage.getItem(
        "numberOfContractions"
      );
      localStorage.setItem(`${numberOfContractionsSoFar}-stop`, new Date());
    } else {
      setTimeStarted(new Date());
      const numberOfContractionsSoFar = localStorage.getItem(
        "numberOfContractions"
      );
      const numberOfContractionsSoFarInt = numberOfContractionsSoFar
        ? Number.parseInt(numberOfContractionsSoFar)
        : 0;
      localStorage.setItem(
        "numberOfContractions",
        numberOfContractionsSoFarInt + 1
      );
      localStorage.setItem(
        `${numberOfContractionsSoFarInt + 1}-start`,
        new Date()
      );
    }
  };

  return (
    <ButtonContainer>
      <Button onClick={onClick} started={timeStarted}>
        {timeStarted ? "Stop" : "Start"}
      </Button>
    </ButtonContainer>
  );
};

export default Timer;
