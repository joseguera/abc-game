import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpellCheck,
  faXmark,
  faHeart,
  faFrog,
  faLightbulb
} from "@fortawesome/free-solid-svg-icons";
import SpellingCard from "../SpellingCard";
import NameButton from "../NameButton";

class LetterDetail extends React.Component {
  /////// IMPROVEMENT NOTE ///////
  /*
    If user clicks on the animalName => Animal Fact will play
    If user clicks on the animalImage => "The alligator says [alligator sound]"
  */

  state = {
    animal: this.props.alphabet.animalName,
    isLiked: false,
    isSpellingOpen: false
  };

  setLiked = () => {
    const liked = this.state.isLiked;
    this.setState({ isLiked: !liked });
  };

  handleOpenClose = () => {
    const clicked = this.state.isSpellingOpen;
    this.setState({
      isSpellingOpen: !clicked
    });
  };

  render() {
    const { isLiked, isSpellingOpen } = this.state;

    return (
      <div className="card-holder">
        {this.props.alphabet
          .filter((letter) => letter.clicked)
          .map((animal) => (
            <div key={animal.id} className="letter-detail">
              {isSpellingOpen ? (
                <SpellingCard
                  animal={animal}
                  handleOpenClose={this.handleOpenClose}
                />
              ) : (
                <div className="playing-card">
                  <div className="xCloser-holder">
                    <div
                      className="x-closer"
                      onClick={() => this.props.handleOpenClose(animal)}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </div>
                  </div>
                  <div className="image-holder">
                    <img
                      className="animal-image"
                      style={{ width: animal.horizontal && "100%", height: !animal.horizontal && "100%" }}
                      src={animal.animalImage}
                      alt={animal.animalName}
                    />
                  </div>
                  <div
                    className="animalName-holder"
                  >
                    <div>
                      <p className="animal-name">{animal.animalName}</p>
                    </div>
                    <div className="icon" onClick={this.handleOpenClose}>
                      <FontAwesomeIcon icon={faSpellCheck} />
                    </div>
                  </div>
                  <div className="icon-holder">
                    <NameButton animalName={animal.animalName} />
                    <div className="icon">
                      <FontAwesomeIcon icon={faFrog} />
                    </div>
                    <div className="icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div
                      className="icon"
                      onClick={this.setLiked}
                      style={{ color: `${isLiked ? "#FF6347" : "#2F4F4F"}` }}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    );
  }
}

export default LetterDetail;
