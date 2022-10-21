import AlphabetLetter from "../AlphabetLetter";

const AlphabetList = (props) => {
  return (
    <div className="alphabet-list">
      {props.alphabet.map((alpha) => {
        return (
          <div className="letter-row">
              <AlphabetLetter
                key={alpha.id}
                letter={alpha.value}
                handleOpenClose={props.handleOpenClose}
                alpha={alpha}
                // handleButtonCheck={props.handleButtonCheck}
              />
          </div>
        );
      })}
    </div>
  );
};

export default AlphabetList;
