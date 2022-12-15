import React from "react";
import { SpellingCard, NameButton } from "components";
import {
  CardHolder,
  CardLetter,
  PlayingCard,
  XCloserHolder,
  XCloser,
  ImageHolder,
  NameHolder,
  Utils,
  NameTitle,
  Name,
  Icon,
  IconHolder,
  IconHeart,
} from "./SubjectDetail.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpellCheck,
  faXmark,
  faQuestion,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

class SubjectDetail extends React.Component {
  /////// IMPROVEMENT NOTE ///////
  /*
    If user clicks on the animalName => Animal Fact will play
    If user clicks on the animalImage => "The alligator says [alligator sound]"
  */

  state = {
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
      <CardHolder>
        {this.props.alphabet
          .filter((letter) => letter.clicked)
          .map((animal) => (
            <CardLetter key={animal.id}>
              <PlayingCard>
                <XCloserHolder>
                  <XCloser onClick={() => this.props.handleOpenClose(animal)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </XCloser>
                </XCloserHolder>
                <ImageHolder>
                  <img
                    style={{
                      width: animal.horizontal && "100%",
                      height: !animal.horizontal && "100%",
                    }}
                    src={animal.animalImage}
                    alt={animal.animalName}
                  />
                </ImageHolder>
                <NameHolder>
                  {isSpellingOpen ? (
                    <SpellingCard
                      animal={animal}
                      sounds={this.props.sounds}
                      handleOpenClose={this.handleOpenClose}
                    />
                  ) : (
                    <Utils>
                      <NameTitle>
                        <div>
                          <Name
                            style={{
                              lineHeight:
                                (animal.animalName === "Yellow Mongoose" ||
                                  animal.animalName === "Vervet Monkey") &&
                                "35px",
                            }}
                          >
                            {animal.animalName}
                          </Name>
                        </div>
                        <Icon onClick={this.handleOpenClose}>
                          <FontAwesomeIcon icon={faSpellCheck} />
                        </Icon>
                      </NameTitle>
                      <IconHolder>
                        <NameButton
                          animalName={animal.animalName}
                          animalNameSound={animal.animalNameSound}
                        />
                        <Icon>
                          <FontAwesomeIcon icon={faLightbulb} />
                        </Icon>
                        <IconHeart
                          onClick={this.setLiked}
                          style={{
                            color: `${isLiked ? "#FF6347" : "#2F4F4F"}`,
                          }}
                          ref={this.colorRef}
                          onMouseOver={this.handleMouseOver}
                          onMouseOut={this.handleMouseOut}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </IconHeart>
                      </IconHolder>
                    </Utils>
                  )}
                </NameHolder>
              </PlayingCard>
            </CardLetter>
          ))}
      </CardHolder>
    );
  }
}

export default SubjectDetail;
