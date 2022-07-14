import React from "react";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";

export default class NameButton extends React.Component {
  state = {
    animalName: "",
    data: null,
    audio: ""
  };

  getAnimalName = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.animalName}`
      );
      this.setState({
        audio: data[0].phonetics[0].audio
      });
    } catch (err) {
      this.setState({ hasError: true, isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.animalName !== prevState.animalName) {
      this.getAnimalName();
    }
  }

  componentDidMount() {
    this.getAnimalName();
  }

  playSound = (animalName) => {
    this.setState({
      animalName
    })
  }

  render() {
    return (
      <div className="icon">
        <FontAwesomeIcon icon={faVolumeLow} onClick={() => this.playSound(this.props.animalName)}/>
        <ReactAudioPlayer
          src={this.state.audio}
          autoPlay
          controls
          className="audio-player"
        />
      </div>
    );
  }
}
