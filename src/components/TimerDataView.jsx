import React from "react";
import styled from "styled-components";
import { Row, Cell } from "./Table";
import moment from "moment";

const TimerDataText = styled.div`
  text-align: center;
  color: ${({ primary, theme }) =>
    primary ? theme.steelTeal : theme.blackCoffee};
  font-size: ${({ primary }) => (primary ? "125%" : "75%")};
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
  const start = moment(data.start).format("D MMM h:mm a");

  return (
    <Row>
      <Cell>
        <TimerDataText primary={false}>{start}</TimerDataText>
      </Cell>
      <Cell>
        <TimerDataText primary={true}>{data.duration}</TimerDataText>
      </Cell>
      <Cell>
        <TimerDataText primary={false}>{data.frequency || "-"}</TimerDataText>
      </Cell>
    </Row>
  );
};

const TimerDataView = ({ data }) => {
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
        {data[1] &&
          Object.keys(data)
            .reverse()
            .map((key) => (
              <TimerDataLine key={data[key].start} data={data[key]} />
            ))}
      </TimerDataContainer>
    </>
  );
};

export default TimerDataView;
