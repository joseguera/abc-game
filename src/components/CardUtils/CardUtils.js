import React, { useState } from "react";
import { NameButton, FactButton } from "components";
import {
  Utils,
  NameHolder,
  Name,
  Icon,
  IconHolder,
  IconHeartLiked,
  IconHeartNotLiked,
} from "./CardUtils.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpellCheck, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CardUtils({ name, animalNameSound, animalFacts, getAudio, id, category, list, handleOpenClose, isLiked }, props) {
  const handleLike = (id, category, list) => {
    props.handleLike(id, category, list);
  };

  return (
    <Utils>
      <NameHolder>
        <div>
          {name.eng.length > 10 ? (
            <div className="name">{name.eng}</div>
          ) : (
            <Name>{name.eng}</Name>
          )}
        </div>
        <Icon onClick={() => handleOpenClose()}>
          <button>
            <FontAwesomeIcon icon={faSpellCheck} />
          </button>
        </Icon>
      </NameHolder>
      <IconHolder>
        <NameButton
          name={name.eng}
          animalNameSound={animalNameSound}
        />
        <FactButton
          name={name.eng}
          animalNameSound={animalNameSound}
          animalFacts={animalFacts}
          getAudio={getAudio}
        />
        {isLiked ? (
          <IconHeartLiked onClick={() => handleLike(id, category, list)}>
            <FontAwesomeIcon icon={faHeart} />
          </IconHeartLiked>
        ) : (
          <IconHeartNotLiked onClick={() => handleLike(id, category, list)}>
            <FontAwesomeIcon icon={faHeart} />
          </IconHeartNotLiked>
        )}
      </IconHolder>
    </Utils>
  );
}
