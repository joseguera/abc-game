import AlphabetLetter from "../AlphabetLetter";

const AlphabetList = (props) => {
  return (
    <div className="alphabet-list">
      {props.letterRows.map((row) => {
        return (
          <div className="letter-row">
            {row.map((letterVar) => (
              <AlphabetLetter
                key={letterVar.id}
                letter={letterVar}
                handleOpenClose={props.handleOpenClose}
                // handleButtonCheck={props.handleButtonCheck}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default AlphabetList;
