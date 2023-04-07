import React, {useState} from "react";
import { LetterTileHolder } from "components";
import { SpellingCardHolder, IconHolder, CloseIcon, Icon } from "./SpellingCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleXmark,
  faObjectUngroup,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function SpellingCard({ value, sounds, syllableSounds, item, xSectionCloser }) {

  const [isSpelled, setIsSpelled] = useState(true);

  const setSpeller = () => {
    setIsSpelled(!isSpelled)
  }

    return (
      <SpellingCardHolder>
        <LetterTileHolder
          value={value}
          sounds={sounds}
          syllableSounds={syllableSounds}
          tiles={item.tiles}
          syllables={item.syllables}
          name={item.name}
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
          <CloseIcon onClick={() => xSectionCloser()}>
            <FontAwesomeIcon icon={faRectangleXmark} />
          </CloseIcon>
        </IconHolder>
      </SpellingCardHolder>
    );
}
