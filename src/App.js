import React, { useState } from "react";
import {
  scienceArray,
  artsArray,
  mathArray,
  animalSyllables,
  alphabetLetterSounds,
} from "./zebrAPI";
import { Home, Science, Technology, Engineering, Arts, Math } from "pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faPaw,
  faMusic,
  faBookOpenReader,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { ButtonList, CardDetail } from "components";
import "./styles.css";
import { StyledLink, SiteTitle, MainApp } from "./App.styles";

export default function App() {

  // SCIENCE
  const [animals, setAnimals] = useLocalStorage("animals", scienceArray);
  const [sounds, setSounds] = useState(alphabetLetterSounds);
  const [syllables, setSyllables] = useState(animalSyllables);

  // ARTS
  const [instruments, setInstruments] = useLocalStorage(
    "instruments",
    artsArray
  );

  // MATH
  const [numbers, setNumbers] = useLocalStorage("numbers", mathArray);

  const [detailOpen, setDetailOpen] = useState(false);
  const [loading, isLoading] = useState(false);

  ////////////////////////////////////////////
  ///////// PARENT FUNCTIONS - START /////////
  ////////////////////////////////////////////

  /* 
      handleClose toggles the view from the ButtonList
      to the LetterDetail
  */

  const handleOpenClose = (letter, audio = new Audio()) => {
    const newList = animals.map((element) => {
      if (letter.id === element.id) {
        element.clicked = !element.clicked;
      }
      return element;
    });
    const clicked = detailOpen;
    setAnimals(newList);
    setDetailOpen(!clicked);
    return (audio.volume = 0);
  };

  const handleLike = (id) => {
    const newList = animals.map((buttonValue) => {
      if (id === buttonValue.id) {
        buttonValue.isLiked =
          String(buttonValue.isLiked) === "true" ? false : true;
      }
      return buttonValue;
    });
    setAnimals(newList);
  };

  //////////////////////////////////////////
  ///////// PARENT FUNCTIONS - END /////////
  //////////////////////////////////////////



  /////////////////////////////////////
  ///////// IMPROVEMENT NOTES /////////
  /////////////////////////////////////
  /*
    
  */

  return (
    <Router>
      <MainApp>
        {loading && <div>Loading</div>}
        {
          // hasAnimal  &&
          <div className="main-body">
            <div className="header-holder">
              <div className="header">
                <div className="header-title-holder">
                  <div className="header-item">
                    <FontAwesomeIcon icon={faPaw} className="header-brand" />
                  </div>
                  <SiteTitle>
                    <StyledLink to="/">
                      <h1 className="titles">Aby Zebra</h1>
                    </StyledLink>
                  </SiteTitle>
                </div>
              </div>
            </div>

            {/* Start of Router Code */}
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => <Home {...props} />}
              />
              <Route
                exact
                path="/science"
                component={(props) => <Science {...props} animals={animals} />}
              />
              <Route
                exact
                path="/technology"
                component={(props) => <Technology {...props} />}
              />
              <Route
                exact
                path="/engineering"
                component={(props) => <Engineering {...props} />}
              />
              <Route
                exact
                path="/arts"
                component={(props) => (
                  <Arts {...props} instruments={instruments} />
                )}
              />
              <Route
                exact
                path="/math"
                component={(props) => <Math {...props} numbers={numbers} />}
              />
              <Route
                path="/science/:id"
                component={(props) => (
                  <CardDetail
                    {...props}
                    list={animals}
                    category="science"
                    isDetailOpen={detailOpen}
                    handleOpenClose={handleOpenClose}
                    sounds={sounds.alphabet}
                    syllableSounds={syllables}
                    handleLike={handleLike}
                  />
                )}
              />
              <Route
                path="/arts/:id"
                component={(props) => (
                  <CardDetail
                    {...props}
                    list={instruments}
                    category="arts"
                    isDetailOpen={detailOpen}
                    handleOpenClose={handleOpenClose}
                    syllableSounds={syllables}
                    handleLike={handleLike}
                  />
                )}
              />
              <Route
                path="/math/:id"
                component={(props) => (
                  <CardDetail
                    {...props}
                    list={numbers}
                    category="math"
                    isDetailOpen={detailOpen}
                    handleOpenClose={handleOpenClose}
                    syllableSounds={syllables}
                    handleLike={handleLike}
                  />
                )}
              />
            </Switch>
            {/* End of Router Code */}
          </div>
        }
      </MainApp>
    </Router>
  );
}
