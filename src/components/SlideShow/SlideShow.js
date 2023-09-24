import React, { useState } from "react";
import {
  ShowContainer,
  SlideHolder,
  Slide,
  Fact,
  CloseIcon,
} from "./SlideShow.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faRectangleXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function SlideShow({ xSectionCloser, item }) {
  const [slide, setSlide] = useState(0);

  const slideContent = [
    <Fact>
      Place of Origin: {item.slides[0].placeOfOrigin}
      <br />
      Flag: <img src={item.slides[0].flag} alt={item.slides[0].placeOfOrigin} />
      <br />
      How it Works: {item.slides[0].howItWorks}
    </Fact>,
    <Fact>
      Instrument Type: {item.slides[1].instrumentType}
      <br />
      Technical Name: {item.slides[1].technicalName} <br />
      Made of Material: {item.slides[1].material} <br />
    </Fact>,
    <Fact>
      <iframe width="360" height="315" src={item.slides[2].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" allowfullscreen></iframe>
    </Fact>
  ];

  const decrementFact = () => {
    setSlide((prevFact) => prevFact - 1);
    slide <= 0 && setSlide(2);
  };

  const incrementFact = () => {
    setSlide((prevFact) => prevFact + 1);
    slide >= 2 && setSlide(0);
  };

  return (
    <ShowContainer>
      <SlideHolder>
        <FontAwesomeIcon
          className="arrow-icon"
          icon={faAngleLeft}
          onClick={() => decrementFact()}
        />
        <div className="flex flex-col">
          <Slide>{slideContent[slide]}</Slide>
        </div>
        <FontAwesomeIcon
          className="arrow-icon"
          icon={faAngleRight}
          onClick={() => incrementFact()}
        />
      </SlideHolder>
      <CloseIcon onClick={() => xSectionCloser()}>
        <FontAwesomeIcon icon={faRectangleXmark} />
      </CloseIcon>
    </ShowContainer>
  );
}
