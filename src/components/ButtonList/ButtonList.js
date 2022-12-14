import React from "react";
import { Button } from "components";
import { ButtonMatrix, ButtonRow } from "./ButtonList.styles";

export default function ButtonList(props) {
  return (
    <ButtonMatrix>
      {props.alphabet.map((alpha) => {
        return (
          <ButtonRow key={alpha.id}>
            <Button
              handleOpenClose={props.handleOpenClose}
              alpha={alpha}
            />
          </ButtonRow>
        );
      })}
    </ButtonMatrix>
  );
}
