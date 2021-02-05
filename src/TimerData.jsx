import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { aquamarine, bittersweet } from "./colors";
import Time from "./Time";

const ButtonContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: center;
  margin: 2em 0;
`;

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
  justify-content: center;
  padding: 8px;
`;

const Cell = styled.div`
  padding: 0.5em 1.5em;
`;

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const TimerDataLine = ({ data }) => {
  const start = new Date(data.start);
  const stop = new Date(data.stop);

  const startDate = start.toLocaleDateString("en-gb", options);
  const startTime = start.toISOString().slice(11, 16);

  const duration = stop - start;

  return (
    <Row>
      <Cell>{`${startDate} ${startTime}`}</Cell>
      <Cell>{Time.convertMS(duration)}</Cell>
      <Cell>{data.frequency || "-"}</Cell>
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
      <div>
        <Row>
          <Cell>Start</Cell>
          <Cell>Duration</Cell>
          <Cell>Frequency</Cell>
        </Row>
        {data &&
          Object.keys(data)
            .reverse()
            .map((key) => <TimerDataLine data={data[key]} />)}
      </div>
    </>
  );
};

export default TimerData;
