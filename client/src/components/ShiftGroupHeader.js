import "./ShiftGroupHeader.css";
const ShiftGroupHeader = (props) => {
  const date = props.date && props.date.split("/")[2];
  const monthNum = props.date && props.date.split("/")[1];
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthArr[monthNum];
  const dateToday = new Date();
  const day = dateToday.getDate();
  const secs = props.shiftsDuration / 1000;
  const hours = Math.floor(secs / 3600);
  const remSecs = secs % 3600;
  const mins = remSecs / 60;
  return (
    <div className="container1">
      {date == day ? (
        <h3>Today</h3>
      ) : date == day + 1 ? (
        <h3>Tomorrow</h3>
      ) : (
        <h3>
          {month} {date}
        </h3>
      )}
      {props.myshift ? (
        <h4 id="h4">
          {props.shiftsCounter}, {hours} h {mins == 0 ? <></> : mins}{" "}
          {mins == 0 ? <></> : "mins"}
        </h4>
      ) : (
        <h4 id="h4">{props.shiftsCounter}</h4>
      )}
    </div>
  );
};

export default ShiftGroupHeader;
