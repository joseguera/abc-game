import React from "react";
import _ from "lodash";
import {
  factorFinder,
  primeFactorization,
  removeDuplicates,
} from "../../utils/utils";
import { ButtonHolder, NumberButton } from "./FactorButtons.styles";

export default function FactorButtons(props) {
  const factors = factorFinder(primeFactorization(props.item.id));
  const factorButtons = removeDuplicates(factors);
  const factorValues = [...factorButtons].reverse();

  const factorSplit = (button, value) => {
    props.factorSplit(button, value);
  };

  return (
    <ButtonHolder>
      {_.zipWith(factorButtons, factorValues, function (button, value) {
        return (
          <NumberButton
            key={button}
            onClick={() => {
              factorSplit(button, value);
            }}
          >
            {button}
          </NumberButton>
        );
      })}
    </ButtonHolder>
  );
}
