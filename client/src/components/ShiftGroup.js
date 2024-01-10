import Shift from "./Shift";
import ShiftGroupHeader from "./ShiftGroupHeader";
import "./ShiftGroup.css";
const ShiftGroup = (props) => {
  let shiftsCounter = "";
  let target1 = "endTime";
  let target2 = "startTime";
  let endTimeSum = props.shifts.reduce((accumulator, currentValue) => {
    if (currentValue.hasOwnProperty(target1)) {
      return accumulator + currentValue[target1];
    } else {
      return accumulator;
    }
  }, 0);
  let startTimeSum = props.shifts.reduce((accumulator, currentValue) => {
    if (currentValue.hasOwnProperty(target2)) {
      return accumulator + currentValue[target2];
    } else {
      return accumulator;
    }
  }, 0);
  let shiftDuration = endTimeSum - startTimeSum;

  if (!props.shifts) {
    shiftsCounter = "";
  } else if (props.shifts.length < 2) {
    shiftsCounter = `${props.shifts.length} shift`;
  } else shiftsCounter = `${props.shifts.length} shifts`;

  return (
    <div className="container3">
      <ShiftGroupHeader
        date={props.date}
        shiftsCounter={shiftsCounter}
        shiftsDuration={shiftDuration}
        myshift={props.myshift}
      />
      {props.shifts &&
        props.shifts.map((s) => (
          <Shift
            shift={s}
            myshift={props.myshift}
            cancel={props.cancel}
            book={props.book}
            key={s.id}
          />
        ))}
    </div>
  );
};

export default ShiftGroup;
