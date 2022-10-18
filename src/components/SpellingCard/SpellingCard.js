import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import LetterTiles from "../LetterTiles";

export default class SpellingCard extends React.Component {
  state = {};

  render() {
    return (
    <>
        <LetterTiles animalName={this.props.animal.animalName} />
        <div
          className="paw-closer icon"
          onClick={() => this.props.handleOpenClose()}
        >
          <FontAwesomeIcon icon={faPaw} />
        </div>
    
    </>
    );
  }
}