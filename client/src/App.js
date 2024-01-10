import { useEffect, useState } from "react";
import AvailableShifts from "../src/components/AvailableShifts";
import MyShifts from "../src/components/MyShifts";
import * as React from "react";
import "./App.css";

const App = () => {
  const [shifts, setShifts] = useState([]);
  const [allShifts, setAllShifts] = useState([]);
  const [myShifts, setMyShifts] = useState([]);
  const [cancel, setCancel] = useState(true);
  const [book, setBook] = useState(true);
  useEffect(() => {
    const fetchShifts = async () => {
      const response = await fetch(`http://localhost:8080/shifts`);

      let data = await response.json();
      setAllShifts(data);
      setShifts(data.filter((s) => s.area == data[0].area));
      let temp = data.filter((shift) => shift.booked == true);
      setMyShifts(temp);
    };
    fetchShifts();
  }, [cancel, book]);
  const [showMyShifts, setShowMyShifts] = useState(true);
  const onCancel = async (id) => {
    const response = await fetch(`http://localhost:8080/shifts/${id}/cancel`, {
      method: "POST",
    });
    setCancel(!cancel);
  };
  const onBook = async (id) => {
    const response = await fetch(`http://localhost:8080/shifts/${id}/book`, {
      method: "POST",
    });
    setBook(!book);
  };

  const onSelectArea = (area) => {
    setShifts(allShifts.filter((s) => s.area === area));
  };
  const group = groupShifts(shifts);
  const bookedGroup = groupShifts(myShifts);

  const onSelectShiftsTab = () => {
    showMyShifts ? setShowMyShifts(false) : setShowMyShifts(true);
  };

  return (
    <div className="container">
      <div>
        <button
          className={showMyShifts == false ? "buttonenabled" : "buttondisabled"}
          onClick={() => onSelectShiftsTab()}
          disabled={showMyShifts}
        >
          My shifts
        </button>
        <button
          className={showMyShifts ? "buttonenabled" : "buttondisabled"}
          onClick={() => onSelectShiftsTab()}
          disabled={!showMyShifts}
        >
          Available shifts
        </button>
      </div>
      {showMyShifts && <MyShifts group={bookedGroup} cancel={onCancel} />}
      {!showMyShifts && (
        <AvailableShifts
          shifts={shifts}
          allShifts={allShifts}
          group={group}
          cancel={onCancel}
          book={onBook}
          selectArea={onSelectArea}
        />
      )}
    </div>
  );
};

function getDate(timestamp) {
  let date = new Date(timestamp);
  return [date.getFullYear(), date.getMonth(), date.getDate()].join("/");
}

const groupShifts = (shifts) => {
  let shiftsMap = {};

  shifts.forEach((s) => {
    let date = getDate(s.startTime);
    if (shiftsMap[date]) {
      shiftsMap[date].push(s);
    } else {
      shiftsMap[date] = [s];
    }
  });
  return shiftsMap;
};
const getAreas = (shifts) => {
  const areas = {};

  shifts.forEach((s) => {
    if (areas[s.area]) {
      areas[s.area] = areas[s.area] + 1;
    } else {
      areas[s.area] = 1;
    }
  });
  return areas;
};
export default App;
