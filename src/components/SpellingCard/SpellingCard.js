import React, {useState} from "react";
import { LetterTileHolder } from "components";
import { SpellingCardHolder, IconHolder, CloseIcon, Icon } from "./SpellingCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleXmark,
  faObjectUngroup,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function SpellingCard(props) {

  const [isSpelled, setIsSpelled] = useState(true);

  const setSpeller = () => {
    setIsSpelled(!isSpelled)
  }

    return (
      <SpellingCardHolder>
        <LetterTileHolder
          value={props.value}
          sounds={props.sounds}
          syllableSounds={props.syllableSounds}
          tiles={props.animal.tiles}
          syllables={props.animal.syllables}
          name={props.animal.name}
          isSpelled={isSpelled}
        />
        <IconHolder>
          <Icon onClick={() => setSpeller()}>
            {(isSpelled) ? (
              <FontAwesomeIcon icon={faObjectGroup} />
            ) : (
              <FontAwesomeIcon icon={faObjectUngroup} />
            )}
            
          </Icon>
          <CloseIcon onClick={() => props.handleOpenClose()}>
            <FontAwesomeIcon icon={faRectangleXmark} />
          </CloseIcon>
        </IconHolder>
      </SpellingCardHolder>
    );
}
