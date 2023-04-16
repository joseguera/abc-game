import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/playing/playingSlice";
import { Button, Icon, IconDisabled } from "./SoundEffectButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask, faMusic, faCalculator } from "@fortawesome/free-solid-svg-icons";

export default function SoundEffectButton({ soundEffect, getAudio, category }) {
  const dispatch = useDispatch();
  const playing = useSelector((state) => state.playing.value);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(soundEffect)
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);

  
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

  const playAudio = () => {
    dispatch(change(false));
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    getAudio(audio)
    return audio.play();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(change(true));
    }, audioTrackDuration);
    return () => clearTimeout(timer);
  }, [audioTrackDuration, dispatch]);

  return (
    <Button>
      {playing ? (
        <Icon>
          <FontAwesomeIcon icon={soundEffectButton(category)} onClick={() => playAudio()} />
        </Icon>
      ) : (
        <IconDisabled>
          <FontAwesomeIcon icon={soundEffectButton(category)} />
        </IconDisabled>
      )}
    </Button>
  );
}
