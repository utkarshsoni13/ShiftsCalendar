import "./AreaTabs";
const Area = (props) => {
  console.log(props);
  return (
    <button
      className={props.isEnabled ? "h1selected" : "h1notselected"}
      onClick={() => {
        props.selectArea(props.area);
        props.activeArea(props.area);
      }}
    >
      {props.area} ({props.counter})
    </button>
  );
};

export default Area;
