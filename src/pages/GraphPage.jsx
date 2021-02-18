import React, { useContext } from "react";
import { Scatter } from "react-chartjs-2";
import moment from "moment";
import styled, { ThemeContext } from "styled-components";

const constructData = (data, theme) => ({
  labels: ["Scatter"],
  datasets: [
    {
      label: "Duration/Frequency",
      fill: false,
      backgroundColor: theme.lightCyan,
      pointBorderColor: theme.bittersweet,
      pointBackgroundColor: theme.lightCyan,
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: theme.blackCoffee,
      pointHoverBorderColor: theme.blackCoffee,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.keys(data).map((key) => ({
        x: moment(data[key].start),
        y: moment(data[key].stop).diff(moment(data[key].start)) / 1000,
      })),
    },
  ],
});

const options = (data) => ({
  maintainAspectRatio: false,
  responsive: true,
  tooltips: {
    mode: "label",
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
          color: "rgba(255, 255, 255, 0.1)",
          drawBorder: true,
        },
        type: "time",
        time: {
          autoSkip: true,
          displayFormats: {
            second: "HH:mm:ss",
            minute: "HH:mm",
            hour: "HH",
          },
          min: data["1"].start,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
          color: "rgba(255, 255, 255, 0.1)",
          drawBorder: true,
        },
        scaleLabel: {
          display: true,
          labelString: "Duration (s)",
        },
      },
    ],
  },
});

const GraphMessage = styled.div`
  padding-top: 2em;
  text-align: center;
  font-size: 100%;
`;

const GraphContainer = styled.div`
  padding: 2em;
`;

const Graph = ({ data }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {!data[1] && (
        <GraphMessage>
          Once you have recorded contractions a graph will appear
        </GraphMessage>
      )}
      {data[1] && (
        <GraphContainer>
          <Scatter
            data={constructData(data, theme)}
            options={options(data)}
            height={600}
          />
        </GraphContainer>
      )}
    </>
  );
};

export default Graph;
