import Time from "./Time";
import moment from "moment";

const getData = (occurrences) => {
  let times = {};

  for (let index = 1; index <= occurrences; index++) {
    const start = localStorage.getItem(`${index}-start`);
    const stop = localStorage.getItem(`${index}-stop`);

    if (stop) {
      const duration = Time.convertMS(moment(stop).diff(moment(start)));

      let frequency;
      if (index !== 1) {
        const previousStop = localStorage.getItem(`${index - 1}-stop`);

        frequency = Time.convertMS(moment(start).diff(moment(previousStop)));
      }

      times = {
        ...times,
        ...{
          [index]: {
            start,
            stop,
            frequency,
            duration,
          },
        },
      };
    }
  }

  return times;
};

export default getData;
