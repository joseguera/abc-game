import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { animalFactCitations } from "../../zebrAPI";
import { AboutHolder, Title, Instructions, CitationHolder, SubTitle, SteamHeading, Links } from "./About.styles";

export default function About(props) {
  const [steamCategories, setSteamCategories] = useState({
    science: { click: false },
    arts: { click: false },
  });
  const [clicked, setClicked] = useState(false);

  function openCitations(id) {
    if (id === "science") {
      setSteamCategories({ ...steamCategories, science: { click: !clicked } });
    }
    if (id === "arts") {
      setSteamCategories({ ...steamCategories, arts: { click: !clicked } });
    }
    let showCitation = clicked;
    setClicked(!showCitation);
  }

  return (
    <AboutHolder>
      <Title>About</Title>
      <Instructions>
        These are the links we used to create our fun facts:
        <br />
        <span>
          <i>
            NOTE: We've carefully vetted these links to ensure that their page
            content was child-friendly. However, we cannot control the ads or
            links to other pages on these sites. Parental discretion is advised.
          </i>
        </span>
      </Instructions>

      <CitationHolder>
        <SubTitle>Citations</SubTitle>
        <SteamHeading onClick={() => openCitations("science")}>
          Science Facts{" "}
          {steamCategories.science.click ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
        </SteamHeading>
        {steamCategories.science.click && (
          <Links>
              {Object.values(animalFactCitations).map((fact, idx) => {
                return (
                  <ul key={idx}>
                    <p>Name</p>
                    <li><a href={fact.F1} target="_blank" rel="noopener noreferrer">{fact.F1}</a></li>
                    <li><a href={fact.F2} target="_blank" rel="noopener noreferrer">{fact.F2}</a></li>
                    <li><a href={fact.F3} target="_blank" rel="noopener noreferrer">{fact.F3}</a></li>
                  </ul>
                );
              })}
          </Links>
        )}
        <SteamHeading onClick={() => openCitations("arts")}>
          Art Facts{" "}
          {steamCategories.arts.click ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
        </SteamHeading>
        {steamCategories.arts.click && (
          <div>
            <ul>
              <li>link 1</li>
              <li>link 2</li>
              <li>link 3</li>
              <li>link 4</li>
              <li>link 5</li>
              <li>link 6</li>
              <li>link 7</li>
              <li>link 8</li>
              <li>link 9</li>
              <li>link 10</li>
            </ul>
          </div>
        )}
      </CitationHolder>
    </AboutHolder>
  );
}
