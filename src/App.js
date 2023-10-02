import React, { useRef, useState } from "react";
import {
  scienceArray,
  artsArray,
  mathArray,
  animalSyllables,
  alphabetLetterSounds,
} from "./zebrAPI";
import { Header, MenuModal } from "components";
import { Outlet} from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import "./styles.css";


export default function App() {
  const menuModal = useRef();
  // SCIENCE
  const [animals, setAnimals] = useLocalStorage("animals", scienceArray);
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
    let array = [];
    if (category === "science") {
      array = [...animals];
    }
    if (category === "arts") {
      array = [...instruments];
    }
    if (category === "math") {
      array = [...numbers];
    }

    const newList = array.map((buttonValue) => {
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
        <div className="flex flex-col justify-center items-center w-full">
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
