import AreaTabs from "./AreaTabs";
import ShiftGroup from "./ShiftGroup";

const AvailableShifts = (props) => {
  return (
    <div className="container">
      <AreaTabs
        shifts={props.shifts}
        allShifts={props.allShifts}
        selectArea={props.selectArea}
      />
      {Object.keys(props.group).map((key) => {
        return (
          <ShiftGroup
            myshift={false}
            shifts={props.group[key]}
            date={key}
            cancel={props.cancel}
            book={props.book}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default AvailableShifts;
