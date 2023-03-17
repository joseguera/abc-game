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
    // <Link to={`/${props.category}/${props.item.id - 1}`} style={styledLink} >
    <Link to={`/${props.category}/${props.item.id - 1}`} style={styledLink} >
      <StyledLetter
        className="alphabet-letter"
      >
        <ButtonHeader>
          <Letter>{props.item.value}</Letter>
          {props.item.isLiked && (
            <Icon>
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </Icon>
          )}
        </ButtonHeader>
        <IconHolder>
          <AnimalIcon
            src={props.item.animalImage}
            className={props.item.horizontal ? "horizontal" : "vertical"}
            alt="none"
          />
        </IconHolder>
      </StyledLetter>
    </Link>
  );
}
