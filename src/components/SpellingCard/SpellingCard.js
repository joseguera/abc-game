import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import LetterTiles from "../LetterTiles";

export default class SpellingCard extends React.Component {
  state = {};

  render() {
    return (
    <div className="spelling-card-holder">
        <LetterTiles animalName={this.props.animal.syllables} />
        <div
          className="icon spell-close-icon"
          onClick={() => this.props.handleOpenClose()}
        >
          <FontAwesomeIcon icon={faRectangleXmark} />
        </div>
    
    </div>
    );
  }
}