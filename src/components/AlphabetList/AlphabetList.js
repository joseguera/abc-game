import React from "react";
import AlphabetLetter from "../../components/AlphabetLetter/AlphabetLetter";
import { List, LetterRow } from "./AlphabetList.styles";

export default function AlphabetList(props) {
  return (
    <List>
      {props.alphabet.map((alpha) => {
        return (
          <LetterRow key={alpha.id}>
              <AlphabetLetter
                handleOpenClose={props.handleOpenClose}
                alpha={alpha}
              />
          </LetterRow>
        );
      })}
    </List>
  );
};
