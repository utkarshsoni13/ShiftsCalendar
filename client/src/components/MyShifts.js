import ShiftGroup from "./ShiftGroup";
import { useState } from "react";
import "./AvailableShifts.css";
const MyShifts = (props) => {
  return (
    <div className="container">
      {Object.keys(props.group).map((key) => {
        return (
          <ShiftGroup
            myshift={true}
            shifts={props.group[key]}
            date={key}
            cancel={props.cancel}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default MyShifts;
