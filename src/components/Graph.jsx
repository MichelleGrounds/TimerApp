import { Scatter } from "react-chartjs-2";
import moment from "moment";

const constructData = (data) => ({
  labels: ["Scatter"],
  datasets: [
    {
      label: "Duration/Frequency",
      fill: false,
      backgroundColor: "rgba(75,192,192,0.4)",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 10,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
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
  // tooltips: {
  //   mode: "label",
  // },
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

const Graph = ({ data }) => {
  return (
    <>
      {!data[1] && (
        <div>Once you have recorded contractions a graph will appear</div>
      )}
      {data[1] && (
        <Scatter data={constructData(data)} options={options(data)} />
      )}
    </>
  );
};

export default Graph;
