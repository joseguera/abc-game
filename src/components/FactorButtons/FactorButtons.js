import React from "react";
import _ from "lodash";
import {
  factorFinder,
  primeFactorization,
  removeDuplicates,
} from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonContainer,
  FactorHolder,
  NumberButton,
  CloseIcon,
} from "./FactorButtons.styles";

export default function FactorButtons({ item, handleOpenClose, ...props }) {
  const factors = factorFinder(primeFactorization(item.id));
  const factorButtons = removeDuplicates(factors);
  const factorValues = [...factorButtons].reverse();

  const factorSplit = (button, value) => {
    props.factorSplit(button, value);
  };

  return (
    <ButtonContainer>
      <FactorHolder>
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
      </FactorHolder>
      <CloseIcon onClick={() => handleOpenClose()}>
        <FontAwesomeIcon icon={faRectangleXmark} />
      </CloseIcon>
    </ButtonContainer>
  );
}
