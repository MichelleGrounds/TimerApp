import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { bittersweet, lightCyan, steelTeal } from "./colors";
import Time from "./Time";

const getData = (occurrences) => {
  let times = {};

  for (let index = 1; index <= occurrences; index++) {
    const start = localStorage.getItem(`${index}-start`);
    const stop = localStorage.getItem(`${index}-stop`);

    let frequency;
    if (index !== 1) {
      const previousStop = localStorage.getItem(`${index - 1}-stop`);

      frequency = Time.convertMS(new Date(start) - new Date(previousStop));
    }

    times = {
      ...times,
      ...{
        [index]: {
          start,
          stop,
          frequency,
        },
      },
    };
  }

  return times;
};

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Cell = styled.div`
  padding: 0.5em 1.5em;
  flex-basis: 50%;
`;

const options = {
  weekday: "short",
  year: "2-digit",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};

const TimerDataText = styled.div`
  text-align: center;
  color: ${({ primary }) => (primary ? steelTeal : "black")};
  font-size: ${({ primary }) => (primary ? "200%" : "75%")};
`;

const TimerDataHeaderText = styled.div`
  text-align: center;
`;

const TimerDataContainer = styled.div`
  width: 75%;
  height: 70vh;
  overflow: auto;
  margin: 0 auto;
`;

const TimerDataLine = ({ data }) => {
  const start = new Date(data.start);
  const stop = new Date(data.stop);

  const startFormatted = start.toLocaleDateString("en-gb", options);

  const duration = stop - start;

  return (
    <Row>
      <Cell>
        <TimerDataText primary={false}>{startFormatted}</TimerDataText>
      </Cell>
      <Cell>
        <TimerDataText primary={true}>{Time.convertMS(duration)}</TimerDataText>
      </Cell>
      <Cell>
        <TimerDataText primary={false}>{data.frequency || "-"}</TimerDataText>
      </Cell>
    </Row>
  );
};

const TimerData = ({ occurrences }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const occurrences = localStorage.getItem("numberOfContractions");

    if (occurrences) {
      setData(getData(occurrences));
    }
  }, [occurrences]);

  return (
    <>
      <TimerDataContainer>
        <Row>
          <Cell>
            <TimerDataHeaderText>Start</TimerDataHeaderText>
          </Cell>
          <Cell>
            <TimerDataHeaderText>Duration</TimerDataHeaderText>
          </Cell>
          <Cell>
            <TimerDataHeaderText>Frequency</TimerDataHeaderText>
          </Cell>
        </Row>
        {data &&
          Object.keys(data)
            .reverse()
            .map((key) => <TimerDataLine data={data[key]} />)}
      </TimerDataContainer>
    </>
  );
};

export default TimerData;
