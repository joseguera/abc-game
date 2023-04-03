import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { AboutHolder, SteamHeading } from "./About.styles";

export default function About(props) {
  const [steamCategories, setSteamCategories] = useState({
    science: { click: false },
    arts: { click: false }
  });
  const [clicked, setClicked] = useState(false);

  function openCitations(id) {
    if (id === "science") {
      setSteamCategories({ ...steamCategories, science: { click: !clicked } })
    }
    if (id === "arts") {
      setSteamCategories({ ...steamCategories, arts: { click: !clicked } })
    }
    let showCitation = clicked;
    setClicked(!showCitation);
  }

  return (
    <AboutHolder>
      <h2>About</h2>
      <p>These are the links we used to create our fun facts:</p>
      <div>
        <h3>Citations</h3>
        <SteamHeading onClick={() => openCitations("science")}>
          Science Facts{" "}
          {steamCategories.science.click ? (
            <FontAwesomeIcon icon={faAngleDown} />
          ) : (
            <FontAwesomeIcon icon={faAngleUp} />
          )}
        </SteamHeading>
        {steamCategories.science.click && (
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
      </div>
    </AboutHolder>
  );
}
