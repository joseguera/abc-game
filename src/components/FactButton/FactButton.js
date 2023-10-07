import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/playing/playingSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function FactButton({ funFacts, getAudio }) {
  const dispatch = useDispatch();
  const playing = useSelector((state) => state.playing.value);
  const [factCounter, setFactCounter] = useState(0);
  const [audio, setAudio] = useState(
    typeof Audio !== "undefined" && new Audio(funFacts[0])
  );
  const [audioTrackDuration, setAudioTrackDuration] = useState(0);

  const setAudioTrack = (factNumber) => {
    setAudio((currentElement) => {
      currentElement = new Audio(funFacts[factNumber]);
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
    dispatch(change(false));
    const audioDuration = Math.ceil(audio.duration * 1000);
    setAudioTrackDuration(audioDuration);
    getAudio(audio);
    return audio.play();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(change(true));
    }, audioTrackDuration);
    return () => clearTimeout(timer);
  }, [audioTrackDuration, dispatch]);

  return (
    <>
      {playing ? (
        <div className="text-3xl cursor-pointer text-[#2f4f4f] flex items-center hover:text-[#FC6A03]">
          <FontAwesomeIcon
            icon={faLightbulb}
            onClick={() => {
              adjustCounter();
              playAudio();
            }}
          />
        </div>
      ) : (
        <div className="text-3xl cursor-not-allowed text-[#8fbcbc] flex items-center">
          <FontAwesomeIcon icon={faLightbulb} />
        </div>
      )}
    </>
  );
}
