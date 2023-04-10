import React from "react";
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
  funFacts,
  getAudio,
  id,
  category,
  handleLike,
  xSectionCloser,
  isLiked,
  list,
}) {
  return (
    <Utils>
      <NameHolder>
        <NameButton name={name.eng} nameSound={nameSound} category={category} />
        <DestructButton onClick={() => xSectionCloser()}>
          <button>
            <FontAwesomeIcon icon={faShapes} />
          </button>
        </DestructButton>
      </NameHolder>
      <IconHolder>
        <SoundEffectButton nameSound={nameSound} category={category} />
        <FactButton
          name={name.eng}
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
