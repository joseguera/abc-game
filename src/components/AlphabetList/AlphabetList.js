import AlphabetLetter from "../AlphabetLetter";

const AlphabetList = (props) => {
  return (
    <div className="alphabet-list">
      {props.alphabet.map((alpha) => {
        return (
          <div className="letter-row">
              <AlphabetLetter
                key={alpha.id}
                handleOpenClose={props.handleOpenClose}
                alpha={alpha}
              />
          </div>
        );
      })}
    </div>
  );
};

export default AlphabetList;
