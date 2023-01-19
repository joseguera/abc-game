import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  StyledLetter,
  styledLink,
  ButtonHeader,
  Letter,
  Icon,
  IconHolder,
  AnimalIcon,
} from "./Button.styles";

export default function Button(props) {
  return (
    <Link to={`/letter/${props.alpha.id - 1}`} style={styledLink} >
      <StyledLetter
        className="alphabet-letter"
      >
        <ButtonHeader>
          <Letter>{props.alpha.value}</Letter>
          {props.alpha.isLiked && (
            <Icon>
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </Icon>
          )}
        </ButtonHeader>
        <IconHolder>
          <AnimalIcon
            src={props.alpha.animalImage}
            className={props.alpha.horizontal ? "horizontal" : "vertical"}
            alt="none"
          />
        </IconHolder>
      </StyledLetter>
    </Link>
  );
}
