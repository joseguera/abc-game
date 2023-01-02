import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Icon, IconDisabled } from "./LanguageButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeAmericas, faVolumeLow } from "@fortawesome/free-solid-svg-icons";

export default function LanguageButton(props) {
  const playing = useSelector((state) => state.playing.value);

  const languageSwitch = () => {
    console.log("Hola");
  }

  return (
    <>
      {playing ? (
        <Icon>
          <FontAwesomeIcon icon={faGlobeAmericas} onClick={() => languageSwitch()} />
        </Icon>
      ) : (
        <IconDisabled>
          <FontAwesomeIcon icon={faGlobeAmericas} />
        </IconDisabled>
      )}
    </>
  );
}
