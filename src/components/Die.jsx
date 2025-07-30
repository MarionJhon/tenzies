const Die = (props) => {
  const style = {
    backgroundColor: props.isHeld === true ? "#59E391" : "#FFFFFF",
  };
  return (
    <>
      <button
        onClick={props.click}
        style={style}
        aria-pressed={props.isHeld}
        aria-label={`Die with value ${props.value}, ${
          props.isHeld ? "Held" : "Not held"
        }`}
      >
        {props.value}
      </button>
    </>
  );
};

export default Die;
