import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/playing/playingSlice";
import { Icon, IconDisabled } from "./SoundEffectButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlask,
  faMusic,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons";

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
      topicIcon = faCalculator;
    }
    return topicIcon;
  };

  const playAudio = () => {
    dispatch(change(false));
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    getAudio(audio);
    return audio.play();
  };


  // Need to improve the implementation of this function
  useEffect(() => {
    const timer = setTimeout(() => {
      // dispatch(change(true));
      // In particular, right here:
      // Maybe, carousel between two sound effects?
      setAudioTrackDuration(audioTrackDuration + 500);
      // **********************************/
    }, audioTrackDuration);
    return () => clearTimeout(timer);
  }, [audioTrackDuration, dispatch]);

  return (
    <>
      {playing ? (
        <button onClick={() => playAudio()}>
          <Icon>
            <FontAwesomeIcon
              icon={soundEffectButton(category)}
            />
          </Icon>
        </button>
      ) : (
        <IconDisabled>
          <FontAwesomeIcon icon={soundEffectButton(category)} />
        </IconDisabled>
      )}
    </>
  );
}
