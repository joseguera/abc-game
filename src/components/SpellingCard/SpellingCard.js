import React from "react";
import { SpellingCardHolder, Icon } from "./SpellingCard.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import LetterTiles from "../LetterTiles";

export default class SpellingCard extends React.Component {
  state = {};

  render() {
    return (
    <SpellingCardHolder>
        <LetterTiles syllables={this.props.animal.syllables} animalName={this.props.animal.animalName} />
        <Icon
          onClick={() => this.props.handleOpenClose()}
        >
          <FontAwesomeIcon icon={faRectangleXmark} />
        </Icon>
    </SpellingCardHolder>
    );
  }
}