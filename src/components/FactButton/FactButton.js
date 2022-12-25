import React, { useState, useEffect } from "react";
import { Icon, IconDisabled } from "./FactButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const FactButton = (props) => {
  const [factCounter, setFactCounter] = useState(0);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(props.animalFacts[0])
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const setAudioTrack = (factNumber) => {
    setAudio((currentElement) => {
      currentElement = new Audio(props.animalFacts[factNumber]);
      return currentElement;
    });
  };

  const adjustCounter = () => {
    setFactCounter((currentCount) => {
      let factNumber = currentCount >= 2 ? 0 : (currentCount += 1);
      setAudioTrack(factNumber);
      return factNumber;
    });
  };

  const playAudio = () => {
    setIsPlaying(true)
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    return audio.play();
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(false);
    }, audioTrackDuration);
    return () => clearTimeout(timer);
  }, [audioTrackDuration]);

  return (
    <>
      {isPlaying > 0 ? (
        <IconDisabled>
          <FontAwesomeIcon
            icon={faLightbulb}
          />
        </IconDisabled>
      ) : (
        <Icon>
          <FontAwesomeIcon
            icon={faLightbulb}
            onClick={() => {
              adjustCounter();
              playAudio();
            }}
          />
        </Icon>
      )}
    </>
  );
};

export default FactButton;
