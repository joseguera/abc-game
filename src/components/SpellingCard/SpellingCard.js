import React from "react";
import { LetterTileHolder } from "components";
import { SpellingCardHolder, Icon } from "./SpellingCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

export default class SpellingCard extends React.Component {
  state = {};

  render() {
    return (
      <SpellingCardHolder>
        <LetterTileHolder
          sounds={this.props.sounds}
          syllables={this.props.animal.syllables}
          animalName={this.props.animal.animalName}
        />
        <Icon onClick={() => this.props.handleOpenClose()}>
          <FontAwesomeIcon icon={faRectangleXmark} />
        </Icon>
      </SpellingCardHolder>
    );
  }
}
