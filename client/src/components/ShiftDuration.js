import "./ShiftDuration.css";

const convertTime = (unix_timestamp) => {
  let date = new Date(unix_timestamp);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  return hours + ":" + minutes.slice(-2);
};

const ShiftDuration = (props) => {
  return (
    <h4 className="duration">
      {convertTime(props.startTime)}-{convertTime(props.endTime)}
    </h4>
  );
};

export default ShiftDuration;
