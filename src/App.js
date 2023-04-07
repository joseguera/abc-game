import React, { useState } from "react";
import {
  scienceArray,
  artsArray,
  mathArray,
  animalSyllables,
  alphabetLetterSounds,
} from "./zebrAPI";
import { Home, About, Contact, Shop, CardDetail, Science, Technology, Engineering, Arts, Math } from "pages";
import { Header, Menu } from "components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faMusic,
  faBookOpenReader,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { MainApp } from "./App.styles";

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
  const [menuOpen, setMenuOpen] = useState(false);    
  const [loading, isLoading] = useState(false);

  ////////////////////////////////////////////
  ///////// PARENT FUNCTIONS - START /////////
  ////////////////////////////////////////////

  /* 
      handleClose toggles the view from the ButtonList
      to the LetterDetail
  */

  const handleOpenClose = (id, category, list, audio = new Audio()) => {
    const newList = list.map((element) => {
      if (id === element.id) {
        element.clicked = !element.clicked;
      }
      return element;
    });

    if (category === "science") {
      setAnimals(newList);
    }
    if (category === "arts") {
      setInstruments(newList);
    }
    if (category === "math") {
      setNumbers(newList);
    }

    const clicked = detailOpen;
    setDetailOpen(!clicked);
    return (audio.volume = 0);
  };

  const handleLike = (id, category, list) => {
    const newList = list.map((buttonValue) => {
      if (id === buttonValue.id) {
        buttonValue.isLiked = !buttonValue.clicked;
      }
      return buttonValue;
    });

    if (category === "science") {
      setAnimals(newList);
    }
    if (category === "arts") {
      setInstruments(newList);
    }
    if (category === "math") {
      setNumbers(newList);
    }
  };

  const openMenu = () => {
    const menu = menuOpen;
    setMenuOpen(!menu);
  } 

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
            <Header openMenu={openMenu} />
            {menuOpen && <Menu openMenu={openMenu} />}
            {/* Start of Router Code */}
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => <Home {...props} menuOpen={menuOpen} />}
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
                exact
                path="/about"
                component={(props) => <About {...props} />}
              />
              <Route
                exact
                path="/contact"
                component={(props) => <Contact {...props} />}
              />
              <Route
                exact
                path="/aby-store"
                component={(props) => <Shop {...props} />}
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
