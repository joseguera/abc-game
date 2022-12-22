import React, { useState } from "react";
import { Icon, IconDisabled } from "./FactButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const FactButton = (props) => {
  const [factCounter, setFactCounter] = useState(0);

  const adjustCounter = () => {
    setFactCounter((currentCount) => {
      let factNumber = currentCount >= 2 ? 0 : (currentCount += 1);
      return factNumber;
    });
  };

  const playAudio = (count) => {
    console.log({ count });
    return new Audio(props.animalFacts[count]).play();
  };

  return (
    <>
      <Icon>
        <FontAwesomeIcon
          icon={faLightbulb}
          onClick={() => {
            adjustCounter();
            playAudio(factCounter);
          }}
        />
      </Icon>
      <IconDisabled>
        <FontAwesomeIcon
          icon={faLightbulb}
        />
      </IconDisabled>
    </>
  );
};

export default FactButton;
