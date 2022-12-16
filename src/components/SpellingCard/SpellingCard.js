import React from "react";
import { LetterTileHolder } from "components";
import { SpellingCardHolder, IconHolder, CloseIcon, Icon } from "./SpellingCard.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRectangleXmark,
  faObjectUngroup,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

export default class SpellingCard extends React.Component {
  state = {
    isSpelled: true
  };

  setSpeller = () => {
    const spelled = this.state.isSpelled; 
    this.setState({ isSpelled: !spelled })
  }

  render() {
    console.log(this.state.isSpelled)
    const { isSpelled } = this.state;
    return (
      <SpellingCardHolder>
        <LetterTileHolder
          sounds={this.props.sounds}
          syllables={this.props.animal.syllables}
          animalName={this.props.animal.animalName}
          isSpelled={isSpelled}
        />
        <IconHolder>
          <Icon onClick={() => this.setSpeller()}>
            {(isSpelled) ? (
              <FontAwesomeIcon icon={faObjectGroup} />
            ) : (
              <FontAwesomeIcon icon={faObjectUngroup} />
            )}
            
          </Icon>
          <CloseIcon onClick={() => this.props.handleOpenClose()}>
            <FontAwesomeIcon icon={faRectangleXmark} />
          </CloseIcon>
        </IconHolder>
      </SpellingCardHolder>
    );
  }
}
