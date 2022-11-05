import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faPaw,
  faMusic,
  faBookOpenReader,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";
import AlphabetList from "../src/components/AlphabetList";
import LetterDetail from "../src/components/LetterDetail";
import "./styles.css";

class App extends React.Component {
  ///////// IMPROVEMENT NOTE /////////
  /*
    Other keys that need to be added to the alphabet objects are:
    - category : 'grassland-tropical'
    - animalName : 
    - animalPicture : 'some file name or external link'
    - etc...
  */

  state = {
    alphabet: [
      {
        id: 1,
        value: "A",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725655/Cory-Images/alligator_e1xwoj.png",
        animalName: "Alligator",
        syllables: ["Al-li-", "ga-", "tor"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
        horizontal: true
      },
      {
        id: 2,
        value: "B",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116248/Cory-Images/baboon_jr7qvu.png",
        animalName: "Baboon",
        syllables: ["Ba-boon"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
        horizontal: false
      },
      {
        id: 3,
        value: "C",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/chimp_s0mnxx.png",
        animalName: "Chimpanzee",
        syllables: ["Chim-", "pan-", "zee"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/chimp_cr87ba.mp3",
        horizontal: false
      },
      {
        id: 4,
        value: "D",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116245/Cory-Images/dingo_hmddgd.png",
        animalName: "Dingo",
        syllables: ["Din-go"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
        horizontal: true
      },
      {
        id: 5,
        value: "E",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/elephant_u4435s.png",
        animalName: "Elephant",
        syllables: ["El-e-", "phant"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
        horizontal: true
      },
      {
        id: 6,
        value: "F",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116245/Cory-Images/frog_fomeds.png",
        animalName: "Frog",
        syllables: ["Frog"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
        horizontal: true
      },
      {
        id: 7,
        value: "G",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/gorilla_yjzqej.png",
        animalName: "Gorilla",
        syllables: ["Go-", "ril-la"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
        horizontal: false
      },
      {
        id: 8,
        value: "H",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1667582162/Cory-Images/hyena_dzhabn.png",
        animalName: "Hyena",
        syllables: ["Hy-e-na"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
        horizontal: true
      },
      {
        id: 9,
        value: "I",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725654/Cory-Images/impala_wasjnb.png",
        animalName: "Impala",
        syllables: ["Im-", "pal-a"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
        horizontal: true
      },
      {
        id: 10,
        value: "J",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725651/Cory-Images/jaguar_vpi3s0.png",
        animalName: "Jaguar",
        syllables: ["Jag-", "u-ar"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
        horizontal: true
      },
      {
        id: 11,
        value: "K",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116250/Cory-Images/koala_x4wwtd.png",
        animalName: "Koala",
        syllables: ["Ko-", "a-la"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
        horizontal: true
      },
      {
        id: 12,
        value: "L",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Lemur",
        syllables: ["Le-mur"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
        horizontal: true
      },
      {
        id: 13,
        value: "M",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725651/Cory-Images/macaw_wxuj7o.png",
        animalName: "Macaw",
        syllables: ["Ma-caw"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
        horizontal: false
      },
      {
        id: 14,
        value: "N",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Numbat",
        syllables: ["Num-bat"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
        horizontal: true
      },
      {
        id: 15,
        value: "O",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Okapi",
        syllables: ["O-ka-pi"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
        horizontal: true
      },
      {
        id: 16,
        value: "P",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666736835/Cory-Images/panda_gc28ha.png",
        animalName: "Panda",
        syllables: ["Pan-da"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
        horizontal: false
      },
      {
        id: 17,
        value: "Q",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Quetzal",
        syllables: ["Quet-", "zal"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
        horizontal: true
      },
      {
        id: 18,
        value: "R",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Rhinoceros",
        syllables: ["Rhi-", "noc-", "er-os"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
        horizontal: true
      },
      {
        id: 19,
        value: "S",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Snake",
        syllables: ["Snake"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
        horizontal: true
      },
      {
        id: 20,
        value: "T",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Tiger",
        syllables: ["Ti-ger"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
        horizontal: true
      },
      {
        id: 21,
        value: "U",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Unau",
        syllables: ["U-nau"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
        horizontal: true
      },
      {
        id: 22,
        value: "V",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Vervet Monkey",
        syllables: [["Ver-vet"], ["Mon-key"]],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
        horizontal: true
      },
      {
        id: 23,
        value: "W",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Warthog",
        syllables: ["Wart-", "hog"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
        horizontal: true
      },
      {
        id: 24,
        value: "X",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116248/Cory-Images/xenops_fgylga.png",
        animalName: "Xenops",
        syllables: ["Xe-nops"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
        horizontal: true
      },
      {
        id: 25,
        value: "Y",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116248/Cory-Images/xenops_fgylga.png",
        animalName: "Yellow Mongoose",
        syllables: [["Ye-llow"], ["Mon-", "goose"]],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
        horizontal: true
      },
      {
        id: 26,
        value: "Z",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Zebra",
        syllables: ["Ze-bra"],
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
        horizontal: true
      }
    ],
    isDetailOpen: false,
    isLoading: false
  };
  ////////////////////////////////////
  ///////// PARENT FUNCTIONS /////////
  ////////////////////////////////////

  /* 
      handleClose toggles the view from the AlphabetList
      to the LetterDetail
    */
  handleOpenClose = (letter) => {
    const newList = this.state.alphabet.map((element) => {
      if (letter.id === element.id) {
        element.clicked = !element.clicked;
      }
      return element;
    });
    const clicked = this.state.isDetailOpen;
    this.setState({
      alphabet: newList,
      isDetailOpen: !clicked
    });
  };

  ///////// IMPROVEMENT NOTES /////////
  /*
    
  */

  render() {
    // const hasAnimal = !this.state.isLoading && this.state.animal;
    const { alphabet } = this.state;

    return (
      <div className="App">
        {this.state.isLoading && <div>Loading</div>}
        {
          // hasAnimal  &&
          <div className="main-body">
            <div className="navBar-holder">
              <div className="nav-bar">
                <div className="navBar-title-holder">
                  <div className="navBar-item">
                    <FontAwesomeIcon icon={faPaw} className="navBar-brand" />
                  </div>
                  <div className="site-title">
                    <h1>Aby Zebra</h1>
                  </div>
                </div>
                <div className="navBar-buttons">
                  <div className="navBar-item">
                    <FontAwesomeIcon icon={faListUl} className="navBar-icon" />
                  </div>
                  <div className="navBar-item">
                    <FontAwesomeIcon icon={faMusic} className="navBar-icon" />
                  </div>
                  <div className="navBar-item">
                    <FontAwesomeIcon icon={faBookOpenReader} className="navBar-icon" />
                  </div>
                  <div className="navBar-item">
                    <FontAwesomeIcon icon={faCartShopping} className="navBar-icon" />
                  </div>
                </div>
              </div>
            </div>
            {this.state.isDetailOpen ? (
              <LetterDetail
                alphabet={alphabet}
                isDetailOpen={this.state.isDetailOpen}
                handleOpenClose={this.handleOpenClose}
              />
            ) : (
              <AlphabetList
                handleOpenClose={this.handleOpenClose}
                alphabet={alphabet}
                // handleButtonCheck={this.handleButtonCheck}
              />
            )}
          </div>
        }
      </div>
    );
  }
}

export default App;
