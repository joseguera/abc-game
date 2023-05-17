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

export default function Button({ category, item }) {
  return (
    <Link to={`/${category}/${item.id}`} style={styledLink} >
    {/* <Link to={`/${category}/${item.key}`} style={styledLink} > */}
      <StyledLetter
        className="alphabet-letter"
      >
        <ButtonHeader>
          <Letter>{item.value}</Letter>
          {item.isLiked && (
            <Icon>
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </Icon>
          )}
        </ButtonHeader>
        <IconHolder>
          <AnimalIcon
            src={item.image}
            className={item.horizontal ? "horizontal" : "vertical"}
            alt={item.name}
            // alt={item.name}
          />
        </IconHolder>
      </StyledLetter>
    </Link>
  );
}
