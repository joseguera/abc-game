import React, { useRef, useState } from "react";
import axios from "axios";
import {
  scienceArray,
  artsArray,
  mathArray,
  animalSyllables,
  alphabetLetterSounds,
} from "./zebrAPI";
import { Home, About, Contact, Shop, CardDetail, Science, Technology, Engineering, Arts, Math, Favorites } from "pages";
import { Header, MenuModal } from "components";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faMusic,
  faBookOpenReader,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

export default function App() {
  const menuModal = useRef();
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

  ///////// API Call - MongoDB /////////

  // const getAnimals = async () => {
  //   try {
  //     const { data } = await axios(
  //       `http://localhost:3000/`
  //     );
  //     setAnimals(data);    
  //   } catch (error) {
  //     console.error("Location Error:", error)
  //   }
  // }

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

  const handleModal = () => {
    menuModal.current.showModal();
  }

  const handleLike = (id, category, list) => {
    const newList = list.map((buttonValue) => {
      if (id === buttonValue.id) {
        buttonValue.isLiked =  String(buttonValue.isLiked) === "true" ? false : true;
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

  //////////////////////////////////////////
  ///////// PARENT FUNCTIONS - END /////////
  //////////////////////////////////////////

  return (
    <div
      className="min-w-screen bg-[#fde7b4] min-h-screen"
    >
      {loading && <div>Loading</div>}
      {
        // hasAnimal  &&
        <div className="main-body">
          <Header handleModal={handleModal} />
          <MenuModal menuModal={menuModal} />
          <Outlet
            context={{
              instruments,
              animals,
              numbers,
              detailOpen,
              handleOpenClose,
              syllables,
              handleLike,
            }}
          />
        </div>
      }
    </div>
  );
}
