/**
 * Time in seconds
 * 60 Sec = 1 Min
 * @param time
 * @returns
 */
const timeFormat = (time: number) => {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60);
  const hours = Math.floor(time / 60 / 60);

  const calcMinutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
  const calcSeconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
  const calcHours = seconds.toString().length === 1 ? "0" + hours : hours;

  return time >= 3600
    ? `${calcHours} : ${calcMinutes} : ${calcSeconds}`
    : `${calcMinutes} : ${calcSeconds}`;
};

export default timeFormat;
