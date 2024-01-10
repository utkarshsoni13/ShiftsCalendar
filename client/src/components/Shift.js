import ShiftDuration from "./ShiftDuration";
import ShiftArea from "./ShiftArea";
import ButtonCancel from "./ButtonCancel";
import ButtonBook from "./ButtonBooked";
import "./Shift.css";
const Shift = (props) => {
  return (
    <div className="container1">
      <div className="left">
        <ShiftDuration
          startTime={props.shift.startTime}
          endTime={props.shift.endTime}
        />
        {props.myshift ? <ShiftArea area={props.shift.area} /> : <></>}
      </div>
      {props.shift.booked ? (
        <>
          {" "}
          {props.myshift == false ? <h4>Booked</h4> : <></>}
          <ButtonCancel
            startTime={props.shift.startTime}
            id={props.shift.id}
            cancel={props.cancel}
          />
        </>
      ) : (
        <ButtonBook
          startTime={props.shift.startTime}
          id={props.shift.id}
          book={props.book}
        />
      )}
    </div>
  );
};

export default Shift;
