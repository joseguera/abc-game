import React, { useState, useEffect } from "react";
import { Icon, IconDisabled } from "./FactButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const FactButton = (props) => {
  const [factCounter, setFactCounter] = useState(0);
  const [audio, setAudio] = useState(typeof Audio !== "undefined" && new Audio(props.animalFacts[0]));
  // const [isPlaying, setIsPlaying] = useState(false);

  const adjustCounter = () => {
    setFactCounter((currentCount) => {
      let factNumber = currentCount >= 2 ? 0 : (currentCount += 1);
      setAudioTrack(factNumber)
      return factNumber;
    });
  };

  const setAudioTrack = (factNumber) => {
    setAudio((currentElement) => {
      currentElement = new Audio(props.animalFacts[factNumber]);
      return currentElement;
    });
  };

  const playAudio = () => {
    console.log(audio.src, audio.duration, factCounter);
    return audio.play();
  };

  // useEffect(() => {
  //   isPlaying ? audio.play() : audio.pause();
  // }, [isPlaying]);

  return (
    <>
      <Icon>
        <FontAwesomeIcon
          icon={faLightbulb}
          onClick={() => {
            adjustCounter();
            playAudio();
          }}
        />
      </Icon>
      <IconDisabled>
        <FontAwesomeIcon icon={faLightbulb} />
      </IconDisabled>
    </>
  );
};

export default FactButton;
