import React from "react";
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
        horizontal: true
      },
      {
        id: 2,
        value: "B",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Baboon",
        horizontal: false
      },
      {
        id: 3,
        value: "C",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Chimp",
        horizontal: false
      },
      {
        id: 4,
        value: "D",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Dingo",
        horizontal: false
      },
      {
        id: 5,
        value: "E",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1657922807/Cory-Images/Elephant_f8cj8o.png",
        animalName: "Elephant",
        horizontal: true
      },
      {
        id: 6,
        value: "F",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Frog",
        horizontal: false
      },
      {
        id: 7,
        value: "G",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Gorilla",
        horizontal: false
      },
      {
        id: 8,
        value: "H",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Hyena",
        horizontal: false
      },
      {
        id: 9,
        value: "I",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Impala",
        horizontal: false
      },
      {
        id: 10,
        value: "J",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Jaguar",
        horizontal: false
      },
      {
        id: 11,
        value: "K",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Koala",
        horizontal: false
      },
      {
        id: 12,
        value: "L",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Lemur",
        horizontal: false
      },
      {
        id: 13,
        value: "M",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1657922803/Cory-Images/Macaw_ej3au6.png",
        animalName: "Macaw",
        horizontal: false
      },
      {
        id: 14,
        value: "N",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Numbat",
        horizontal: false
      },
      {
        id: 15,
        value: "O",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Okapi",
        horizontal: false
      },
      {
        id: 16,
        value: "P",
        clicked: false,
        animalImage:
          "https://res.cloudinary.com/djqxogkfw/image/upload/v1657922805/Cory-Images/Panda_sddolm.png",
        animalName: "Panda",
        horizontal: false
      },
      {
        id: 17,
        value: "Q",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Quetzal",
        horizontal: false
      },
      {
        id: 18,
        value: "R",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Rhino",
        horizontal: false
      },
      {
        id: 19,
        value: "S",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Snake",
        horizontal: false
      },
      {
        id: 20,
        value: "T",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Tiger",
        horizontal: false
      },
      {
        id: 21,
        value: "U",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Unau",
        horizontal: false
      },
      {
        id: 22,
        value: "V",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Vervet Monkey",
        horizontal: false
      },
      {
        id: 23,
        value: "W",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Wildebeest",
        horizontal: false
      },
      {
        id: 24,
        value: "X",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Xenops",
        horizontal: false
      },
      {
        id: 25,
        value: "Y",
        // clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Yellowjacket",
        horizontal: false
      },
      {
        id: 26,
        value: "Z",
        clicked: false,
        animalImage:
          "https://www.clipartmax.com/png/middle/156-1560736_smiley-transparent-smiley-face-clipart.png",
        animalName: "Zebra",
        horizontal: false
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
            <div className="nav-bar"></div>
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
