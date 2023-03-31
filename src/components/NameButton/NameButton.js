import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icon, IconDisabled } from "./NameButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faMusic } from "@fortawesome/free-solid-svg-icons";

export default function NameButton(props) {
  const playing = useSelector((state) => state.playing.value);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(props.animalNameSound)
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);

  const playAudio = () => {
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    return audio.play();
  };

  return (
    <>
      {playing ? (
        <Icon>
          <FontAwesomeIcon icon={props.category === "science" ? faPaw : faMusic} onClick={() => playAudio()} />
        </Icon>
      ) : (
        <IconDisabled>
          <FontAwesomeIcon icon={props.category === "science" ? faPaw : faMusic} />
        </IconDisabled>
      )}
    </>
  );
}
