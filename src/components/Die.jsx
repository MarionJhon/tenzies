const Die = (props) => {
  const style = {
    backgroundColor: props.isHeld === true ? "#59E391" : "#FFFFFF"
  }
  return (
    <>
        <button onClick={props.click} style={style}>{props.value}</button>
    </>
  );
};

export default Die;
