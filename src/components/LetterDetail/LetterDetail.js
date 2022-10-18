import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpellCheck,
  faXmark,
  faQuestion,
  faHeart,
  faFrog,
  faLightbulb,
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
    isSpellingOpen: false,
  };

  colorRef = React.createRef();

  setLiked = () => {
    const liked = this.state.isLiked;
    this.setState({ isLiked: !liked });
  };

  handleOpenClose = () => {
    const clicked = this.state.isSpellingOpen;
    this.setState({
      isSpellingOpen: !clicked,
    });
  };

  handleMouseOver = () => {
    return this.state.isLiked
      ? (this.colorRef.current.style.color = "#ff9380")
      : (this.colorRef.current.style.color = "#4d8080");
  };

  handleMouseOut = () => {
    return this.state.isLiked
      ? (this.colorRef.current.style.color = "#FF6347")
      : (this.colorRef.current.style.color = "#2F4F4F");
  };

  render() {
    const { isLiked, isSpellingOpen } = this.state;

    return (
      <div className="card-holder">
        {this.props.alphabet
          .filter((letter) => letter.clicked)
          .map((animal) => (
            <div key={animal.id} className="letter-detail">
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
                    style={{
                      width: animal.horizontal ? "100%" : "",
                      height: !animal.horizontal ? "100%" : "",
                    }}
                    src={animal.animalImage}
                    alt={animal.animalName}
                  />
                </div>
                <div className="animalName-holder">
                  {isSpellingOpen ? (
                    <SpellingCard
                      animal={animal}
                      handleOpenClose={this.handleOpenClose}
                    />
                  ) : (
                    <div className="animal-name-holder">
                      <div>
                        <p className="animal-name">{animal.animalName}</p>
                      </div>
                      <div className="icon" onClick={this.handleOpenClose}>
                        <FontAwesomeIcon icon={faSpellCheck} />
                      </div>
                    </div>
                  )}
                </div>
                <div className="icon-holder">
                  <NameButton
                    animalName={animal.animalName}
                    animalNameSound={animal.animalNameSound}
                  />
                  <div className="icon">
                    <FontAwesomeIcon icon={faLightbulb} />
                  </div>
                  <div
                    className="icon-heart"
                    onClick={this.setLiked}
                    style={{ color: `${isLiked ? "#FF6347" : "#2F4F4F"}` }}
                    ref={this.colorRef}
                    onMouseOver={this.handleMouseOver}
                    onMouseOut={this.handleMouseOut}
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default LetterDetail;
