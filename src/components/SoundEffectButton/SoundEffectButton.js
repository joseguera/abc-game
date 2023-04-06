import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icon, IconDisabled } from "./SoundEffectButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faMusic, faCalculator } from "@fortawesome/free-solid-svg-icons";

export default function SoundEffectButton({ nameSound, category }) {
  const playing = useSelector((state) => state.playing.value);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(nameSound)
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);

  const playAudio = () => {
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    return audio.play();
  };

  const soundEffectButton = (listTopic) => {
    let topicIcon = {};
    if (listTopic === "science") {
      topicIcon = faFlask;
    }
    if (listTopic === "arts") {
      topicIcon = faMusic;
    }
    if (listTopic === "math") {
      topicIcon = faCalculator
    }
    return topicIcon;
  }

  return (
    <>
      {playing ? (
        <Icon>
          <FontAwesomeIcon icon={soundEffectButton(category)} onClick={() => playAudio()} />
        </Icon>
      ) : (
        <IconDisabled>
          <FontAwesomeIcon icon={soundEffectButton(category)} />
        </IconDisabled>
      )}
    </>
  );
}
