import React from "react";
import { Icon } from "./FactButton.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default class FactButton extends React.Component {
  state = {
    audio: this.props.animalFacts,
    counter: 0
  };

  factCounter = () => {
    let count = this.state.counter;
    this.setState({ counter: count += 1 });
    this.playAudio(this.state.counter);
  }

  playAudio = (count) => {
    (count >= 3 && this.setState({ counter: 0 }));
    return new Audio(this.state.audio[count]).play();
  };

  render() {
    console.log(this.state.counter)
    return (
      <Icon>
        <FontAwesomeIcon
          disabled={true}
          icon={faLightbulb}
          onClick={() => this.factCounter()}
        />
      </Icon>
    );
  }
}
