import React from "react";
import styled from "styled-components";
import { Row, Cell } from "../components/Table";
import moment from "moment";

const TimerDataText = styled.div`
  text-align: center;
  color: ${({ primary, theme }) => (primary ? theme.steelTeal : "#544c5f")};
  font-size: ${({ primary }) => (primary ? "125%" : "85%")};
`;

const TimerDataContainer = styled.div`
  width: 90%;
  height: 70vh;
  overflow: auto;
  margin: 0 auto;
`;

const TimerDataLine = ({ data }) => {
  const start = moment(data.start).format("D MMM H:mm");

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
