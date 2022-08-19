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
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1657922806/Cory-Images/Alligator_okxd6p.png",
        animalName: "Alligator",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
        horizontal: true
      },
      {
        id: 2,
        value: "B",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Baboon",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
        horizontal: true
      },
      {
        id: 3,
        value: "C",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Chimp",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/chimp_cr87ba.mp3",
        horizontal: true
      },
      {
        id: 4,
        value: "D",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Dingo",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
        horizontal: true
      },
      {
        id: 5,
        value: "E",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1657922807/Cory-Images/Elephant_f8cj8o.png",
        animalName: "Elephant",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
        horizontal: true
      },
      {
        id: 6,
        value: "F",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Frog",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
        horizontal: true
      },
      {
        id: 7,
        value: "G",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Gorilla",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
        horizontal: true
      },
      {
        id: 8,
        value: "H",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Hyena",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
        horizontal: true
      },
      {
        id: 9,
        value: "I",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Impala",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
        horizontal: true
      },
      {
        id: 10,
        value: "J",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Jaguar",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
        horizontal: true
      },
      {
        id: 11,
        value: "K",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Koala",
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
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
        horizontal: true
      },
      {
        id: 13,
        value: "M",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1657922803/Cory-Images/Macaw_ej3au6.png",
        animalName: "Macaw",
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
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
        horizontal: true
      },
      {
        id: 16,
        value: "P",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1657922805/Cory-Images/Panda_sddolm.png",
        animalName: "Panda",
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
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
        horizontal: true
      },
      {
        id: 18,
        value: "R",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Rhino",
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
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
        horizontal: true
      },
      {
        id: 23,
        value: "W",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Wildebeest",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
        horizontal: true
      },
      {
        id: 24,
        value: "X",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Xenops",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
        horizontal: true
      },
      {
        id: 25,
        value: "Y",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Yellow Mongoose",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
        horizontal: true
      },
      {
        id: 26,
        value: "Z",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Zebu",
        animalNameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660867601/animal-sounds/zebu_lgd2bj.mp3",
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

    const letterRows = [
      alphabet.slice(0, 6),
      alphabet.slice(6, 12),
      alphabet.slice(12, 18),
      alphabet.slice(18, 22),
      alphabet.slice(22, 26)
    ];

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
                alphabet={this.state.alphabet}
                isDetailOpen={this.state.isDetailOpen}
                handleOpenClose={this.handleOpenClose}
              />
            ) : (
              <AlphabetList
                letterRows={letterRows}
                handleOpenClose={this.handleOpenClose}
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
