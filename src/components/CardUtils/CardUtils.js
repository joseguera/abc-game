import React from "react";
import { useSelector } from "react-redux";
import {
  NameButton,
  SoundEffectButton,
  FactButton,
  LikeButton,
} from "components";
import {
  Utils,
  NameHolder,
  DestructButton,
  IconHolder,
} from "./CardUtils.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

export default function CardUtils({
  name,
  nameSound,
  soundEffect,
  funFacts,
  getAudio,
  id,
  category,
  handleLike,
  xSectionCloser,
  isLiked,
  list,
}) {

  const language = useSelector((state) => state.language.value);
  return (

    

    <Utils>
      <NameHolder>
        <NameButton name={name[language]} nameSound={nameSound} category={category} />
        {/* <NameButton name={name} nameSound={nameSound} category={category} /> */}
        <DestructButton onClick={() => xSectionCloser()}>
          <button>
            <FontAwesomeIcon icon={faShapes} />
          </button>
        </DestructButton>
      </NameHolder>
      <IconHolder>
        <SoundEffectButton
          soundEffect={soundEffect}
          getAudio={getAudio}
          category={category}
        />
        <FactButton
          name={name.eng}
          // name={name}
          nameSound={nameSound}
          funFacts={funFacts}
          getAudio={getAudio}
        />
        <LikeButton
          handleLike={handleLike}
          isLiked={isLiked}
          id={id}
          category={category}
          list={list}
        />
      </IconHolder>
    </Utils>
  );
}
