import "./AreaTabs.css";
import Area from "./Area";
import { useState } from "react";
const AreaTabs = (props) => {
  console.log(props);
  const areas = getAreas(props.allShifts);
  const [activeArea, setActiveArea] = useState(Object.keys(areas)[0]);

  const handleAreaClick = (area) => {
    setActiveArea(area);
  };
  const areaHeaders = Object.keys(areas).map((key) => {
    return (
      <Area
        isEnabled={key == activeArea}
        counter={areas[key]}
        area={key}
        key={key}
        selectArea={props.selectArea}
        activeArea={handleAreaClick}
      />
    );
  });
  return <div className="container2">{areaHeaders}</div>;
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

export default AreaTabs;
