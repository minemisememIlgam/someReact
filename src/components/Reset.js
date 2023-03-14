function Reset(props) {
  const { count, onClick } = props;
  return (
    <div>
      {!!count && (
        <button style={{ backgroundColor: "lightgreen" }} onClick={onClick}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Reset;
