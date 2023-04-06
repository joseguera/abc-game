import React, { useState } from "react";
import { NameButton, SoundEffectButton, FactButton } from "components";
import {
  Utils,
  NameHolder,
  DestructButton,
  IconHolder,
  IconHeartLiked,
  IconHeartNotLiked,
} from "./CardUtils.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CardUtils({ name, animalNameSound, animalFacts, getAudio, id, category, list, handleLike, handleOpenClose, isLiked }) {
  const handleLikeHeart = (id, category, list) => {
    handleLike(id, category, list);
  };

  return (
    <Utils>
      <NameHolder>
      <NameButton
        name={name.eng}
        animalNameSound={animalNameSound}
        category={category}
      />
        <DestructButton onClick={() => handleOpenClose()}>
          <button>
            <FontAwesomeIcon icon={faShapes} />
          </button>
        </DestructButton>
      </NameHolder>
      <IconHolder>
        <SoundEffectButton
          animalNameSound={animalNameSound}
          category={category}
        />
        <FactButton
          name={name.eng}
          animalNameSound={animalNameSound}
          animalFacts={animalFacts}
          getAudio={getAudio}
        />
        {isLiked ? ( // Simplify this button's functionality
          <IconHeartLiked onClick={() => handleLikeHeart(id, category, list)}>
            <FontAwesomeIcon icon={faHeart} />
          </IconHeartLiked>
        ) : (
          <IconHeartNotLiked onClick={() => handleLikeHeart(id, category, list)}>
            <FontAwesomeIcon icon={faHeart} />
          </IconHeartNotLiked>
        )}
      </IconHolder>
    </Utils>
  );
}
