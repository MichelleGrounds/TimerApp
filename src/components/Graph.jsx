import { Scatter } from "react-chartjs-2";
import moment from "moment";
import styled from "styled-components";
import { bittersweet, blackCoffee, lightCyan } from "../colors";

const constructData = (data) => ({
  labels: ["Scatter"],
  datasets: [
    {
      label: "Duration/Frequency",
      fill: false,
      backgroundColor: lightCyan,
      pointBorderColor: bittersweet,
      pointBackgroundColor: lightCyan,
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: blackCoffee,
      pointHoverBorderColor: blackCoffee,
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Object.keys(data).map(
        (key) =>
          console.log(moment(data[key].start).format("h:mm:ss a")) || {
            x: moment(data[key].start),
            y: moment(data[key].stop).diff(moment(data[key].start)) / 1000,
          }
      ),
    },
  ],
});

const options = (data) => ({
  responsive: true,
  tooltips: {
    mode: "label",
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "time",
        },
        type: "time",
        ticks: {
          displayFormats: {
            second: "h:mm:ss a",
          },
          min: data["1"].start,
        },
      },
    ],
    yAxes: [
      {
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
  return (
    <>
      {!data[1] && (
        <GraphMessage>
          Once you have recorded contractions a graph will appear
        </GraphMessage>
      )}
      {data[1] && (
        <GraphContainer>
          <Scatter data={constructData(data)} options={options(data)} />
        </GraphContainer>
      )}
    </>
  );
};

export default Graph;
