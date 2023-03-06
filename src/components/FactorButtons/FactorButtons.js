import React from "react";
import {
  factorFinder,
  primeFactorization,
  removeDuplicates,
} from "../../zebrAPI";
import {
    ButtonHolder, NumberButton,
  } from "./FactorButtons.styles";

export default function FactorButtons(props) {
  const factors = factorFinder(primeFactorization(props.animal.id));
  const factorButtons = removeDuplicates(factors);

  return (
    <ButtonHolder>
      {factorButtons.map((factor) => {
        return (
          <NumberButton key={factor}>
            {factor}
          </NumberButton>
        );
      })}
    </ButtonHolder>
  );
}
