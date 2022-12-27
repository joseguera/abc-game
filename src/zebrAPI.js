// Design for zebrAPI which is the backbone of the Aby Zebra web app

export const zebrAPI = {
    science: {
      zoology: {
        alphabet: {
          savanna: [
            {
              id: 1,
              orgValue: "A", // refers to the value by which the particular list will be organized by (Ex. alphabetical, by prime number, etc)
              orgSymbol: "url.png", // image of letter, number or sign language
              image:
                "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725655/Cory-Images/alligator_e1xwoj.png",
              name: {
                eng: "Alligator",
                spa: "Caimán",
              },
              syllables: {
                eng: ["Al-li-", "ga-", "tor"],
                spa: ["Cai-", "mán"],
              },
              audio: {
                sound: "sound.mp3", // this will be the sound the animal or instrument makes. Other lists may not have use for this space
                facts: {
                  eng: ["fact1.mp3", "fact2.mp3", "fact3.mp3"],
                  spa: [""],
                },
                name: {
                  eng: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
                  spa: "",
                },
                syllables: {
                  eng: ["syllable1.mp3", "syllable2.mp3", "syllable3.mp3"],
                  spa: [""],
                },
              },
              horizontal: true, // this will be removed in future lists as all images will be created within a perfect square
              clicked: false,
            },
          ],
        },
      },
    },
    technology: {},
    engineering: {},
    arts: {},
    maths: {},
};

// console.log(zebrAPI);
console.log(zebrAPI.science.zoology.alphabet.savanna[0].name.en);