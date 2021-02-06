import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import moment from "moment";
import {
  Button,
  ButtonContainer,
  TimeButtonContainer,
  TimeButtonText,
} from "./TimerButton";
import Time from "../Time";

const Timer = ({ setOccurrences }) => {
  const [timeStarted, setTimeStarted] = useState(null);
  const [currentDuration, setCurrentDuration] = useState(null);

  const theme = useContext(ThemeContext);

  const startTimer = (time, occurrences) => {
    setTimeStarted(time);
    const numberOfContractionsSoFarInt = Number.parseInt(occurrences) || 0;

    localStorage.setItem(
      "numberOfContractions",
      numberOfContractionsSoFarInt + 1
    );

    localStorage.setItem(`${numberOfContractionsSoFarInt + 1}-start`, time);
  };

  const stopTimer = (time, occurrences) => {
    setTimeStarted(null);

    localStorage.setItem(`${occurrences}-stop`, time);
  };

  const onClick = () => {
    const time = moment();
    const occurrences = localStorage.getItem("numberOfContractions");

    timeStarted ? stopTimer(time, occurrences) : startTimer(time, occurrences);

    setOccurrences(occurrences);
  };

  useEffect(() => {
    let id;

    if (timeStarted) {
      id = setInterval(() => {
        const duration = Time.convertMS(moment().diff(timeStarted));
        setCurrentDuration(duration);
      }, 1000);
    } else {
      setCurrentDuration(null);
    }

    return () => id && clearInterval(id);
  }, [timeStarted]);

  return (
    <ButtonContainer>
      <Button
        onClick={onClick}
        color={timeStarted ? theme.bittersweet : theme.aquamarine}
      >
        <TimeButtonContainer>
          <TimeButtonText primary={true}>
            {timeStarted ? "Stop" : "Start"}
          </TimeButtonText>
          <TimeButtonText primary={false}>{currentDuration}</TimeButtonText>
        </TimeButtonContainer>
      </Button>
    </ButtonContainer>
  );
};

export default Timer;
