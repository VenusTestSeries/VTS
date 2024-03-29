/**
 * Time in seconds
 * 60 Sec = 1 Min
 * @param time
 * @returns
 */

const timeFormat = (countDown: number) => {
  // calculate time left
  const days = Math.floor(countDown / (60 * 60 * 24));
  const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countDown % (60 * 60)) / 60);
  const seconds = Math.floor(countDown % 60);

  const formated = () => {
    if (hours > 0) {
      return `${pZero(hours)}:${pZero(minutes)}:${pZero(seconds)}`;
    }
    if (minutes > 0) {
      return `${pZero(minutes)}:${pZero(seconds)}`;
    }
    if (seconds > 0) {
      return `${pZero(minutes)}:${pZero(seconds)}`;
    }
  };
  return {
    days,
    hours,
    minutes,
    seconds,
    formated: formated(),
  };
};

export default timeFormat;

const pZero = (t: number) => {
  if (t >= 0 && t < 10) {
    return `0${t}`;
  }
  return t;
};

// const timeFormat = (time: number) => {
//   const seconds = time % 60;
//   const minutes = Math.floor(time / 60);
//   const hours = Math.floor(time / 60 / 60);

//   const calcMinutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
//   const calcSeconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
//   const calcHours = seconds.toString().length === 1 ? "0" + hours : hours;

//   return time >= 3600
//     ? `${calcHours} : ${calcMinutes} : ${calcSeconds}`
//     : `${calcMinutes} : ${calcSeconds}`;
// };

// export default getReturnValues;
