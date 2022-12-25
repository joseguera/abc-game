import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/playing/playingSlice";
import { Icon, IconDisabled } from "./FactButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const FactButton = (props) => {
  const dispatch = useDispatch();
  const playing = useSelector((state) => state.playing.value)
  const [factCounter, setFactCounter] = useState(0);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(props.animalFacts[0])
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);
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
    dispatch(change())
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    return audio.play();
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(change())
    }, audioTrackDuration);
    return () => clearTimeout(timer);
  }, [audioTrackDuration]);

  return (
    <>
      {!playing > 0 ? (
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
