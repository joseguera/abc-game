import React from "react";
import { Icon } from "./FactButton.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default class FactButton extends React.Component {
  state = {
    audio: this.props.animalNameSound
  };

  playAudio = () => {
    new Audio(this.state.audio).play();
  }

  render() {
    return (
      <Icon>
        <FontAwesomeIcon icon={faLightbulb} onClick={this.playAudio}/>
      </Icon>
    );
  }
}