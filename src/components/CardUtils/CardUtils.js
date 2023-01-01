import React, { useState } from "react";
import { NameButton, FactButton } from "components";
import {
  Utils,
  NameTitle,
  Name,
  Icon,
  IconHolder,
  IconHeartLiked,
  IconHeartNotLiked,
} from "./CardUtils.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpellCheck, faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CardUtils(props) {
  const handleLike = (id) => {
    props.handleLike(id);
  };
  
  return (
    <Utils>
      <NameTitle>
        <div>
          {props.name.eng.length > 10 ? (
            <div className="name">{props.name.eng}</div>
          ) : (
            <Name>{props.name.eng}</Name>
          )}
        </div>
        <Icon onClick={() => props.handleOpenClose()}>
          <button>
            <FontAwesomeIcon icon={faSpellCheck} />
          </button>
        </Icon>
      </NameTitle>
      <IconHolder>
        <NameButton
          name={props.name.eng}
          animalNameSound={props.animalNameSound}
        />
        <FactButton
          name={props.name.eng}
          animalNameSound={props.animalNameSound}
          animalFacts={props.animalFacts}
          getAudio={props.getAudio}
        />
        {props.isLiked ? (
          <IconHeartLiked onClick={() => handleLike(props.id)}>
            <FontAwesomeIcon icon={faHeart} />
          </IconHeartLiked>
        ) : (
          <IconHeartNotLiked onClick={() => handleLike(props.id)}>
            <FontAwesomeIcon icon={faHeart} />
          </IconHeartNotLiked>
        )}
      </IconHolder>
    </Utils>
  );
}
