import AlphabetLetter from "../AlphabetLetter";

const AlphabetList = (props) => {
  return (
    <div className="alphabet-list">
      {props.alphabet.map((alpha) => {
        return (
          <div className="letter-row" key={alpha.id}>
              <AlphabetLetter
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
