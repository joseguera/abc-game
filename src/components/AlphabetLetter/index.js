const AlphabetLetter = (props) => {
  return (
    <div
      onClick={() => props.handleOpenClose(props.letter)}
      // onDoubleClick={() => props.handleButtonCheck(props.letter)}
      className="alphabet-letter"
    >
      {props.letter.value}
    </div>
  );
};

export default AlphabetLetter;
