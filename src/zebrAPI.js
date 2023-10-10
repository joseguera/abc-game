// Design for  zebrAPI which is the backbone of the Aby Zebra web app

import images from "./images/index.js";
import sounds from "./sounds/index.js";

/////////////////////////////////////////////////////////////////////////
//////////////////////////////// SCIENCE ////////////////////////////////
/////////////////////////////////////////////////////////////////////////

export const scienceArray = [
  {
    id: "alligator",
    value: "A",
    clicked: false,
    image: images.animals.alligator,
    name: {
      en: "Alligator",
      es: "Caimán",
    },
    tiles: {
      en: ["Al-li-", "ga-", "tor"],
      es: ["Cai-", "mán"]
    },
    syllables: {
      en: ["Al", "li", "ga", "tor"],
      es: ["Cai", "mán"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3", 
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/caiman.m4a" 
    },
    soundEffect: [sounds.animals.alligator, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "baboon",
    value: "B",
    clicked: false,
    image: images.animals.baboon,
    name: {
      en: "Baboon",
      es: "Mandril",
    },
    tiles: {
      en: ["Ba-boon"],
      es: ["Man-dril"]
    },
    syllables: {
      en: ["Ba", "boon"],
      es: ["Man", "dril"]
    }, 
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3", 
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/mandril.m4a" 
    },
    soundEffect:
      [sounds.animals.chimpanzee, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "chimpanzee",
    value: "C",
    clicked: false,
    image: images.animals.chimpanzee,
    name: {
      en: "Chimpanzee",
      es: "Chimpancé",
    },
    tiles: {
      en: ["Chim-", "pan-", "zee"],
      es: ["Chim-", "pan-", "cé"]
    },
    syllables: {
      en: ["Chim", "pan", "zee"],
      es: ["Chim", "pan", "cé"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/chimpance.m4a" 
    },
    soundEffect: [sounds.animals.chimpanzee, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-green"
  },
  {
    id: "dingo",
    value: "D",
    clicked: false,
    image: images.animals.dingo,
    name: {
      en: "Dingo",
      es: "Dingo",
    },
    tiles: {
      en: ["Din-go"],
      es: ["Din-go"]
    }, 
    syllables: {
      en: ["Din", "go"],
      es: ["Din", "go"]
    }, 
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655871/animal-audio-ES/full-names/dingo.m4a" 
    },
    soundEffect: [sounds.animals.dingo, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-blue"
  },
  {
    id: "elephant",
    value: "E",
    clicked: false,
    image: images.animals.elephant,
    name: {
      en: "Elephant",
      es: "Elefante",
    },
    tiles: {
      en: ["El-e-", "phant"],
      es: ["E-le-", "fan-te"]
    },
    syllables: {
      en: ["El", "e", "phant"],
      es: ["E", "le", "fan", "te"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/elefante.m4a" 
    },
    soundEffect: [sounds.animals.elephant, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "frog",
    value: "F",
    clicked: false,
    image: images.animals.frog,
    name: {
      en: "Frog",
      es: "Rana",
    },
    tiles: {
      en: ["Frog"],
      es: ["Ra-na"]
    }, 
    syllables: {
      en: ["Frog"],
      es: ["Ra", "na"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655872/animal-audio-ES/full-names/rana.m4a" 
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-yellow"
  },
  {
    id: "gorilla",
    value: "G",
    clicked: false,
    image: images.animals.gorilla,
    name: {
      en: "Gorilla",
      es: "Gorila",
    },
    tiles: {
      en: ["Go-", "ril-la"],
      es: ["Go-", "ri-la"]
    }, 
    syllables: {
      en: ["Go", "ril", "la"],
      es: ["Go", "ri", "la"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655871/animal-audio-ES/full-names/gorila.m4a" 
    },
    soundEffect: [sounds.animals.gorilla, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-green"
  },
  {
    id: "hyena",
    value: "H",
    clicked: false,
    image: images.animals.hyena,
    name: {
      en: "Hyena",
      es: "Hiena",
    },
    tiles: {
      en: ["Hy-e-na"],
      es: ["Hie-na"]
    },
    syllables: {
      en: ["Hy", "e", "na"],
      es: ["Hie", "na"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3", 
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696655871/animal-audio-ES/full-names/hiena.m4a" 
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-green"
  },
  {
    id: "impala",
    value: "I",
    clicked: false,
    image: images.animals.impala,
    name: {
      en: "Impala",
      es: "Impala",
    },
    tiles: {
      en: ["Im-", "pal-a"],
      es: ["Im-", "pa-la"]
    },
    syllables: {
      en: ["Im", "pal", "a"],
      es: ["Im", "pa", "la"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    soundEffect: [sounds.animals.impala, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-yellow"
  },
  {
    id: "jaguar",
    value: "J",
    clicked: false,
    image: images.animals.jaguar,
    name: {
      en: "Jaguar",
      es: "Jaguar"
    },
    tiles: {
      en: ["Jag-", "u-ar"],
      es: ["Ja-guar"]
    },
    syllables: {
      en: ["Jag", "u", "ar"],
      es: ["Ja", "guar"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-blue"
  },
  {
    id: "koala",
    value: "K",
    clicked: false,
    image: images.animals.koala,
    name: {
      en: "Koala",
      es: "Coala",
    },
    tiles: {
      en: ["Ko-", "a-la"],
      es: ["Co-", "a-la"]
    },
    syllables: {
      en: ["Ko", "a", "la"],
      es: ["Co", "a", "la"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896594/animal-audio-ES/full-names/coala-name.m4a" 
    },
    soundEffect: [sounds.animals.okapi, sounds.animals.frog],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "lemur",
    value: "L",
    clicked: false,
    image: images.animals.lemur,
    name: {
      en: "Lemur",
      es: "Lémur",
    },
    tiles: {
      en: ["Le-mur"],
      es: ["Lé-mur"]
    }, 
    syllables: {
      en: ["Le", "mur"],
      es: ["Lé", "mur"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-blue"
  },
  {
    id: "macaw",
    value: "M",
    clicked: false,
    image: images.animals.macaw,
    name: {
      en: "Macaw",
      es: "Guacamaya",
    },
    tiles: {
      en: ["Ma-caw"],
      es: ["Gua-ca-", "ma-ya"]
    },
    syllables: {
      en: ["Ma", "caw"],
      es: ["Gua", "ca", "ma", "ya"]
    }, 
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896593/animal-audio-ES/full-names/guacamaya-name.m4a" 
    },
    soundEffect: [sounds.animals.macaw, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-green"
  },
  {
    id: "numbat",
    value: "N",
    clicked: false,
    image: images.animals.numbat,
    name: {
      en: "Numbat",
      es: "Numbat",
    },
    tiles: {
      en: ["Num-bat"],
      es: ["Num-bat"]

    },
    syllables: {
      en: ["Num", "bat"],
      es: ["Num", "bat"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-yellow"
  },
  {
    id: "okapi",
    value: "O",
    clicked: false,
    image: images.animals.okapi,
    name: {
      en: "Okapi",
      es: "Okapi",
    },
    tiles: {
      en: ["O-ka-pi"],
      es: ["O-ka-pi"]
    },
    syllables: {
      en: ["O", "ka", "pi"],
      es: ["O", "ka", "pi"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    soundEffect: [sounds.animals.okapi, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-green"
  },
  {
    id: "panda",
    value: "P",
    clicked: false,
    image: images.animals.panda,
    name: {
      en: "Panda",
      es: "Panda",
    },
    tiles: {
      en: ["Pan-da"],
      es: ["Pan-da"]
    },
    syllables: {
      en: ["Pan", "da"],
      es: ["Pan", "da"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    soundEffect: [sounds.animals.panda, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-blue"
  },
  {
    id: "quetzal",
    value: "Q",
    clicked: false,
    image: images.animals.quetzal,
    name: {
      en: "Quetzal",
      es: "Quetzal"
    },
    tiles: {
      en: ["Quet-", "zal"],
      es: ["Quet-", "zal"]
    },
    syllables: {
      en: ["Quet", "zal"],
      es: ["Quet", "zal"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    soundEffect: [sounds.animals.quetzal, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "rhinoceros",
    value: "R",
    clicked: false,
    image: images.animals.rhinoceros,
    name: {
      en: "Rhinoceros",
      es: "Rinoceronte",
    },
    tiles: {
      en: ["Rhi-", "noc-", "er-os"],
      es: ["Ri-no-", "ce-", "ron-te"]
    },
    syllables: {
      en: ["Rhi", "noc", "er", "os"],
      es: ["Ri", "no", "ce", "ron", "te"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    soundEffect: [sounds.animals.rhinoceros, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-yellow"
  },
  {
    id: "snake",
    value: "S",
    clicked: false,
    image: images.animals.snake,
    name: {
      en: "Snake",
      es: "Serpiente",
    },
    tiles: {
      en: ["Snake"],
      es: ["Ser-", "pien-", "te"]
    },
    syllables: {
      en: ["Snake"],
      es: ["Ser", "pien", "te"]
    },
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    soundEffect: [sounds.animals.snake, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "tiger",
    value: "T",
    clicked: false,
    image: images.animals.tiger,
    name: {
      en: "Tiger",
      es: "Tigre",
    },
    tiles: {
      en: ["Ti-ger"],
      es: ["Ti-gre"]
    },
    syllables: {
      en: ["Ti", "ger"],
      es: ["Ti", "gre"]
    }, 
    nameSound: { 
      en: "",
      es: "" 
    },
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    soundEffect: [sounds.animals.tiger, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-blue"
  },
  {
    id: "unau",
    value: "U",
    clicked: false,
    image: images.animals.unau,
    name: {
      en: "Unau",
      es: "Perezoso",
    },
    tiles: {
      en: ["U-nau"],
      es: ["Pe-re-", "zo-so"]
    },
    syllables: {
      en: ["U", "nau"],
      es: ["Pe", "re", "zo", "so"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
      es: "" 
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-yellow"
  },
  {
    id: "vervet-monkey",
    value: "V",
    clicked: false,
    image: images.animals.vervet_monkey,
    name: {
      en: "Vervet Monkey",
      es: "Mono Vervet",
    },
    tiles: {
      en: [["Ver-vet"], ["Mon-key"]],
      es: [["Mo-no"], ["Ver-vet"]]
    },
    syllables: {
      en: [["Ver", "vet"], ["Mon", "key"]],
      es: [["Mo", "no"], ["Ver", "vet"]]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3", 
      es: "" 
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-green"
  },
  {
    id: "warthog",
    value: "W",
    clicked: false,
    image: images.animals.warthog,
    name: {
      en: "Warthog",
      es: "Jabalí",
    },
    tiles: {
      en: ["Wart-", "hog"],
      es: ["Ja-", "ba-lí"]
    },
    syllables: {
      en: ["Wart", "hog"],
      es: ["Ja", "ba", "lí"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3", 
      es: "" 
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-yellow"
  },
  {
    id: "xenops",
    value: "X",
    clicked: false,
    image: images.animals.xenops,
    name: {
      en: "Xenops",
      es: "Picolezna",
    },
    tiles: {
      en: ["Xe-nops"],
      es: ["Pi-co-", "lez-na"]
    },
    syllables: {
      en: ["Xe", "nops"],
      es: ["Pi", "co", "lez", "na"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3", 
      es: "" 
    },
    soundEffect: [sounds.animals.xenops, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "yellow-mongoose",
    value: "Y",
    clicked: false,
    image: images.animals.yellow_mongoose,
    name: {
      en: "Yellow Mongoose",
      es: "Mangosta Amarilla",
    },
    tiles: {
      en: [["Yel-low"], ["Mon-", "goose"]],
      es: [["Man-", "gos-ta"], ["A-ma-", "ri-lla"]],
    },
    syllables: {
      en: [["Yel", "low"], ["Mon", "goose"]],
      es: [["Man", "gos", "ta"], ["A", "ma", "ri", "lla"]]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3", 
      es: "" 
    },
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    isLiked: true,
    category: "science",
    background: "bg-card-red"
  },
  {
    id: "zebra",
    value: "Z",
    clicked: false,
    image: images.animals.zebra,
    name: {
      en: "Zebra",
      es: "Cebra",
    },
    tiles: {
      en: ["Ze-bra"],
      es: ["Ce-bra"]
    },
    syllables: {
      en: ["Ze", "bra"],
      es: ["Ce", "bra"]
    },
    nameSound: { 
      en: "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3", 
      es: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696786189/animal-audio-ES/full-names/cebra-name.m4a" 
    },
    soundEffect: [sounds.animals.zebra, sounds.animals.okapi],
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    isLiked: false,
    category: "science",
    background: "bg-card-blue"
  },
];

export const animalSyllables = {
  A: {
    en: {
      al: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_1_pfcrda.mp3",
      li: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_2_upcmbv.mp3",
      ga: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_3_h1a4kp.mp3",
      tor: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_4_kl1tng.mp3",
    },
    es: {
      cai: "",
      mán: ""
    }
  },
  B: {
    en: {
      ba: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_1_itfivg.mp3",
      boon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_2_ncorah.mp3",
    },
    es: {
      man: "",
      dril: ""
    }
  },
  C: {
    en: {
      chim: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_1_qcfs5u.mp3",
      pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_2_besjij.mp3",
      zee: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_3_c9jbgo.mp3",
    },
    es: {
      chim: "",
      pan: "",
      cé: ""
    }
  },
  D: {
    en: {
      din: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_1_uisizq.mp3",
      go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_2_ksewju.mp3"
    },
    es: {
      din: "",
      go: ""
    }
  },
  E: {
    en: {
      el: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_1_x7njho.mp3",
      e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/elephant_2_tpecbo.mp3",
      phant:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_3_ifv1kp.mp3"
    },
    es: {
      e: "", 
      le: "", 
      fan: "", 
      te: ""
    }
  },
  F: {
    en: {
      frog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/frog_1_ziaz9v.mp3",
    },
    es: {
      ra: "",
      na: ""
    }
  },
  G: {
    en: {
      go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_1_ml8hee.mp3",
      ril: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_2_e4b1vh.mp3",
      la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_3_lj7nc5.mp3"
    },
    es: {
      go: "",
      ri: "",
      la: ""
    }
  },
  H: {
    en: {
      hy: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_1_nmxsgi.mp3",
      e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_2_vbkgbo.mp3",
      na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_3_nefma3.mp3"
    },
    es: {
      hie: "",
      na: ""
    }
  },
  I: {
    en: {
      im: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_1_uwkk50.mp3",
      pal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_2_qbm7el.mp3",
      a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_3_w5g2rc.mp3",
    },
    es: {
      im: "",
      pa: "",
      la: ""
    }
  },
  J: {
    en: {
      jag: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/jaguar_1_rsytkv.mp3",
      u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_2_yvkrbl.mp3",
      ar: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_3_qjl6n0.mp3",
    },
    es: {
      ja: "",
      guar: ""
    }
  },
  K: {
    en: {
      ko: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_1_aczrfi.mp3",
      a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_2_fzcj6v.mp3",
      la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_3_dlcaiz.mp3",
    },
    es: {
      co: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896701/animal-audio-ES/syllables/coala-co.m4a",
      a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896702/animal-audio-ES/syllables/coala-a.m4a",
      la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896702/animal-audio-ES/syllables/coala-la.m4a"
    }
  },
  L: {
    en: {
      le: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_1_snqqev.mp3",
      mur: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_2_i58c0k.mp3",
    },
    es: {
      lé: "",
      mur: ""
    }
  },
  M: {
    en: {
      ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_1_v3cwcl.mp3",
      caw: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_2_qhttqp.mp3",
    },
    es: {
      gua: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896703/animal-audio-ES/syllables/guacamaya-gua.m4a", 
      ca: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896702/animal-audio-ES/syllables/guacamaya-ca.m4a", 
      ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896702/animal-audio-ES/syllables/guacamaya-ma.m4a", 
      ya: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696896702/animal-audio-ES/syllables/guacamaya-ya.m4a"
    }
  },
  N: {
    en: {
      num: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_1_db9zmv.mp3",
      bat: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_2_anah1d.mp3",
    },
    es: {
      num: "",
      bat: ""
    }
  },
  O: {
    en: {

    },
    es: {
      
    },
    o: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/okapi_1_sw3dtv.mp3",
    ka: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_2_vfwlga.mp3",
    pi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_3_h0flxr.mp3",
  },
  P: {
    en: {

    },
    es: {
      
    },
    pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_1_mpjyto.mp3",
    da: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_2_uczfub.mp3",
  },
  Q: {
    en: {

    },
    es: {
      
    },
    quet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/quetzal_1_m6re23.mp3",
    zal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/quetzal_2_zrctiz.mp3",
  },
  R: {
    en: {

    },
    es: {
      
    },
    rhi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_1_thiixg.mp3",
    noc: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_2_dwczll.mp3",
    er: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_3_a5nanz.mp3",
    os: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_4_ci6fpm.mp3",
  },
  S: {
    en: {

    },
    es: {
      
    },
    snake:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/snake_1_uudc5b.mp3",
  },
  T: {
    en: {

    },
    es: {
      
    },
    ti: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_1_cmeugy.mp3",
    ger: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_2_dmfmjj.mp3",
  },
  U: {
    en: {

    },
    es: {
      
    },
    u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/unau_1_ujzyfb.mp3",
    nau: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/unau_2_ce3igp.mp3",
  },
  V: {
    en: {

    },
    es: {
      
    },
    ver: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_1_xvowle.mp3",
    vet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_2_haaszc.mp3",
    mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_3_v9rfek.mp3",
    key: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_4_mxlxbg.mp3",
  },
  W: {
    en: {

    },
    es: {
      
    },
    wart: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_1_iysnah.mp3",
    hog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_2_fu4elu.mp3",
  },
  X: {
    en: {

    },
    es: {
      
    },
    xe: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_1_zgooqe.mp3",
    nops: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_2_kpnjv5.mp3",
  },
  Y: {
    en: {

    },
    es: {

    },
    yel: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_1_m8jdxg.mp3",
    low: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_2_bdw2zz.mp3",
    mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_3_su0kmh.mp3",
    goose:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_4_bivqec.mp3",
  },
  Z: {
    en: {
      ze: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_1_cnq15e.mp3",
      bra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_2_gflttj.mp3",
    },
    es: {
      ce: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696786251/animal-audio-ES/syllables/cebra-ce.m4a",
      bra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696786250/animal-audio-ES/syllables/cebra-bra.m4a",
    }
  },
};

export const alphabetLetterSounds = {
    en: {
      A: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/A.mp3",
      B: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/B.mp3",
      C: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/C.mp3",
      D: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/D.mp3",
      E: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/E.mp3",
      F: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/F.mp3",
      G: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/G.mp3",
      H: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/H.mp3",
      I: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/I.mp3",
      J: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/J.mp3",
      K: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/K.mp3",
      L: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695624/alphabet-letters-spoken/L.mp3",
      M: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/M.mp3",
      N: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/N.mp3",
      O: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/O.mp3",
      P: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/P.mp3",
      Q: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/Q.mp3",
      R: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/R.mp3",
      S: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/S.mp3",
      T: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/T.mp3",
      U: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/U.mp3",
      V: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/V.mp3",
      W: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/W.mp3",
      X: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695625/alphabet-letters-spoken/X.mp3",
      Y: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695626/alphabet-letters-spoken/Y.mp3",
      Z: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695626/alphabet-letters-spoken/Z.mp3"
    },
    es: {
      A: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703156/animal-audio-ES/alphabet/a.m4a",
      Á: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703156/animal-audio-ES/alphabet/a.m4a",
      B: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703166/animal-audio-ES/alphabet/b.m4a",
      C: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703151/animal-audio-ES/alphabet/c.m4a",
      D: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703190/animal-audio-ES/alphabet/d.m4a",
      E: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703185/animal-audio-ES/alphabet/e.m4a",
      É: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703185/animal-audio-ES/alphabet/e.m4a",
      F: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703157/animal-audio-ES/alphabet/f.m4a",
      G: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703169/animal-audio-ES/alphabet/g.m4a",
      H: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703182/animal-audio-ES/alphabet/h.m4a",
      I: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703177/animal-audio-ES/alphabet/i.m4a",
      Í: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703177/animal-audio-ES/alphabet/i.m4a",
      J: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703179/animal-audio-ES/alphabet/j.m4a",
      K: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703187/animal-audio-ES/alphabet/k.m4a",
      L: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703159/animal-audio-ES/alphabet/l.m4a",
      LL: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703148/animal-audio-ES/alphabet/ll.m4a",
      M: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703149/animal-audio-ES/alphabet/m.m4a",
      N: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703189/animal-audio-ES/alphabet/n.m4a",
      Ñ: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703180/animal-audio-ES/alphabet/nn.m4a",
      O: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703174/animal-audio-ES/alphabet/o.m4a",
      Ó: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703174/animal-audio-ES/alphabet/o.m4a",
      P: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703164/animal-audio-ES/alphabet/p.m4a",
      Q: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703154/animal-audio-ES/alphabet/q.m4a",
      R: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703162/animal-audio-ES/alphabet/r.m4a",
      S: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703152/animal-audio-ES/alphabet/s.m4a",
      T: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703175/animal-audio-ES/alphabet/t.m4a",
      U: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703172/animal-audio-ES/alphabet/u.m4a",
      Ú: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703172/animal-audio-ES/alphabet/u.m4a",
      V: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703192/animal-audio-ES/alphabet/v.m4a",
      W: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703184/animal-audio-ES/alphabet/w.m4a",
      X: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703161/animal-audio-ES/alphabet/x.m4a",
      Y: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703170/animal-audio-ES/alphabet/y.m4a",
      Z: "https://res.cloudinary.com/djqxogkfw/video/upload/v1696703167/animal-audio-ES/alphabet/z.m4a"
    }
};

export const animalFactCitations = {
  alligator: {
    F1: "https://a-z-animals.com/blog/what-is-a-group-of-crocodiles-called/",
    F2: "https://www.etymonline.com/word/alligator",
    F3: "https://nationalzoo.si.edu/animals/american-alligator",
  },
  baboon: {
    F1: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0029117",
    F2: "https://www.livescience.com/57588-baboon-facts.html",
    F3: "https://www.awf.org/wildlife-conservation/baboon",
  },
  chimpanzee: {
    F1: "https://www.bbc.com/news/science-environment-40405026.amp",
    F2: "https://earth.org/10-facts-about-chimpanzees/",
    F3: "https://projectchimps.org/chimps/chimps-facts/",
  },
  dingo: {
    F1: "https://australian.museum/learn/animals/mammals/dingo/",
    F2: "https://australian.museum/learn/animals/mammals/dingo/",
    F3: "https://www.funFactsencyclopedia.com/Dingo-facts.html",
  },
  elephant: {
    F1: "https://www.etymonline.com/word/elephant#etymonline_v_5724",
    F2: "https://www.worldwildlife.org/stories/what-s-the-difference-between-asian-and-african-elephants-and-10-other-elephant-facts",
    F3: "https://www.childfun.com/articles/general/15-elephant-facts-for-kids/",
  },
  frog: {
    F1: "https://toadsnfrogs.com/group-frogs-called/",
    F2: "https://www.dictionary.com/browse/polliwog",
    F3: "https://www.burkemuseum.org/collections-and-research/biology/herpetology/all-about-amphibians/all-about-frogs",
  },
  gorilla: {
    F1: "https://www.worldwildlife.org/stories/what-do-gorillas-eat-and-other-gorilla-facts",
    F2: "https://www.natgeokids.com/uk/discover/animals/general-animals/gorilla-facts/",
    F3: "https://www.natgeokids.com/uk/discover/animals/general-animals/gorilla-facts/",
  },
  hyena: {
    F1: "https://www.britannica.com/story/do-hyenas-really-laugh",
    F2: "https://onekindplanet.org/animal/spotted-hyena/",
    F3: "https://onekindplanet.org/animal/spotted-hyena/",
  },
  impala: {
    F1: "https://www.nationalgeographic.com/animals/mammals/facts/impala",
    F2: "https://www.livescience.com/52557-impalas.html",
    F3: "https://cheetah.org/canada/2018/04/15/cheetah-versus-impala-each-has-a-competitive-edge/",
  },
  jaguar: {
    F1: "https://www.gadsdentimes.com/story/lifestyle/columns/2019/09/15/david-murdock-column-on-collective-nouns/2787435007/",
    F2: "https://www.nationalgeographic.com/animals/article/animals-big-cats-jaguars-leopards",
    F3: "https://www.wwf.org.uk/learn/wildlife/jaguars",
  },
  koala: {
    F1: "https://www.savethekoala.com/about-koalas/frequently-asked-questions/",
    F2: "https://www.britannica.com/animal/marsupial",
    F3: "https://www.australia.com/en-us/things-to-do/wildlife/facts-about-koalas.html",
  },
  lemur: {
    F1: "https://www.bbc.co.uk/newsround/48539466",
    F2: "https://www.treehugger.com/incredible-facts-about-lemurs-4868779",
    F3: "https://www.lemurconservationnetwork.org/top-10-facts-about-lemurs/",
  },
  macaw: {
    F1: "https://www.rainforestcruises.com/guides/macaw-facts",
    F2: "https://www.allaboutparrots.com/do-macaw-bites-hurt/",
    F3: "https://news.mongabay.com/2019/07/la-mosquitia-dangerous-territory-for-scarlet-macaws-in-honduras/amp/",
  },
  numbat: {
    F1: "http://www.numbat.org.au/thenumbat",
    F2: "https://animalia.bio/numbat",
    F3: "http://www.numbat.org.au/thenumbat",
  },
  okapi: {
    F1: "https://animals.sandiegozoo.org/animals/okapi",
    F2: "https://animals.sandiegozoo.org/animals/okapi",
    F3: "https://www.nationalgeographic.com/animals/mammals/facts/okapi",
  },
  panda: {
    F1: "https://www.newscientist.com/article/2295189-giant-pandas-black-and-white-coat-works-as-excellent-camouflage/",
    F2: "https://m.timesofindia.com/why-is-the-panda-called-so/articleshow/2225965.cms",
    F3: "https://earth.org/interesting-facts-about-pandas/",
  },
  quetzal: {
    F1: "http://datazone.birdlife.org/sowb/casestudy/the-resplendent-quetzal-in-aztec-and-mayan-culture",
    F2: "https://www.nationalgeographic.com/animals/birds/facts/resplendent-quetzal",
    F3: "https://www.britannica.com/animal/quetzal",
  },
  rhinoceros: {
    F1: "https://travel.safari.com/a-crash-of-rhino/",
    F2: "https://www.wwf.org.uk/learn/fascinating-facts/rhinos",
    F3: "https://www.etymonline.com/word/rhinoceros#etymonline_v_15018",
  },
  snake: {
    F1: "https://www.merriam-webster.com/dictionary/snakelet/",
    F2: "https://wonderopolis.org/wonder/why-do-snakes-shed-their-skin",
    F3: "https://www.etymonline.com/word/snake#etymonline_v_23755",
  },
  tiger: {
    F1: "https://a-z-animals.com/blog/whats-a-group-of-tigers-called-how-do-they-behave/",
    F2: "https://depts.washington.edu/triolive/quest/2007/TTQ07030/tiger.html",
    F3: "https://www.pbs.org/wnet/nature/blog/tiger-fact-sheet/",
  },
  unau: {
    F1: "https://slothconservation.org/what-do-you-call-a-group-of-sloths/",
    F2: "https://www.worldwildlife.org/stories/why-are-sloths-slow-and-six-other-sloth-facts",
    F3: "https://tarpits.org/experience-tar-pits/giants-ice-age",
  },
  vervet_monkey: {
    F1: "https://animals.sandiegozoo.org/animals/vervet-monkey",
    F2: "https://animals.sandiegozoo.org/animals/vervet-monkey",
    F3: "https://www.sanbi.org/animal-of-the-week/vervet-monkey/",
  },
  warthog: {
    F1: "https://www.safaribookings.com/blog/warthog-facts",
    F2: "https://www.livescience.com/58337-warthog-facts.html",
    F3: `${"https://lalibela.net/10-interesting-facts-about-warthogs/"}, ${"https://www.wwf.org.uk/learn/fascinating-facts/elephants"}`,
  },
  xenops: {
    F1: "https://www.peruaves.org/furnariidae/streaked-xenops-xenops-rutilans/",
    F2: "https://www.activewild.com/xenops/",
    F3: "https://www.activewild.com/xenops/",
  },
  yellow_mongoose: {
    F1: "https://animalia.bio/yellow-mongoose",
    F2: "https://animalia.bio/yellow-mongoose",
    F3: "https://www.science.org/content/article/scienceshot-why-mongoose-moms-synchronize-births",
  },
  zebra: {
    F1: "https://www.discoverwildlife.com/animal-facts/mammals/facts-about-zebras/",
    F2: "https://www.natgeokids.com/uk/discover/animals/general-animals/zebra-facts/",
    F3: "https://www.britannica.com/story/are-zebras-white-with-black-stripes-or-black-with-white-stripes",
  },
};

////////////////////////////////////////////////////////////////////////////
//////////////////////////////// TECHNOLOGY ////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// technologyArray

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////// ENGINEERING ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// engineeringArray

//////////////////////////////////////////////////////////////////////
//////////////////////////////// ARTS ////////////////////////////////
//////////////////////////////////////////////////////////////////////

export const artsArray = [
  {
    id: "aeolian-harp",
    value: "A",
    clicked: false,
    image: images.instruments.aeolian_harp,
    name: {
      en: "Aeolian Harp",
      es: "Arpa Eólica",
    },
    slides: [{
      placeOfOrigin: "Greece",
      flag: images.flags.greece,
      howItWorks: "The aeolian harp..."
    }, {
      instrumentType: "Wind/String",
      technicalName: "Chordophone",
      material: "Wood"
    }, {
      video: "https://youtube.com/clip/UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL?si=_Avt7vI3WNGqFx96"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    horizontal: true,
    isLiked: true,
    category: "arts"
  },
  {
    id: "bell-tree",
    value: "B",
    clicked: false,
    image: images.instruments.bell_tree,
    name: {
      en: "Bell Tree",
      es: "Árbol de Campanas",
    },
    slides: [{
      placeOfOrigin: "China",
      flag: images.flags.china,
      howItWorks: "The bell tree..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/71w929twkME?si=wmbgBdJ-lBoAQ_k8&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    horizontal: false,
    isLiked: true,
    category: "arts"
  },
  {
    id: "cuica",
    value: "C",
    clicked: false,
    image: images.instruments.cuica,
    name: {
      en: "Cuíca",
      es: "Cuíca",
    },
    slides: [{
      placeOfOrigin: "Brazil",
      flag: images.flags.brazil,
      howItWorks: "The cuíca..."
    }, {
      instrumentType: "Percussion",
      technicalName: "Membranophone",
      material: "metal with animal skin stretched over the top"
    }, {
      video: "https://www.youtube.com/embed/mmlK94QvwiA?si=WdGKnz3ADPRZuB9o&amp;clip=Ugkxu_w8-6SbXsuIBdsKYiNZQEPQdtSmFr7a&amp;clipt=EMC7ARjYsAI&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "didgeridoo",
    value: "D",
    clicked: false,
    image: images.instruments.didgeridoo,
    name: {
      en: "Didgeridoo",
      es: "Didgeridoo",
    },
    slides: [{
      placeOfOrigin: "Australia",
      flag: images.flags.australia,
      howItWorks: "The didgeridoo..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "electric-bass",
    value: "E",
    clicked: false,
    image: images.instruments.electric_bass,
    name: {
      en: "Electric Bass",
      es: "Bajo Eléctrico",
    },
    slides: [{
      placeOfOrigin: "United States",
      flag: images.flags.united_states,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/wslZrcc6mMU?si=uZtyarZuhCwWcPAR&amp;clip=UgkxfEJ4lHCq0wBsPsZRz71uo6PH67BU6czZ&amp;clipt=ENzVERiAxxI&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound: "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "french-horn",
    value: "F",
    clicked: false,
    image: images.instruments.french_horn,
    name: {
      en: "French Horn",
      es: "Corno Francés",
    },
    slides: [{
      placeOfOrigin: "Europe",
      flag: images.flags.european_union,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "gamelatron",
    value: "G",
    clicked: false,
    image: images.instruments.gamelatron,
    name: {
      en: "Gamelatron",
      es: "Gamelatrón",
    },
    slides: [{
      placeOfOrigin: "United States",
      flag: images.flags.united_states,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "harmonica",
    value: "H",
    clicked: false,
    image: images.instruments.harmonica,
    name: {
      en: "Harmonica",
      es: "Armónica",
    },
    slides: [{
      placeOfOrigin: "Europe",
      flag: images.flags.european_union,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "inci",
    value: "I",
    clicked: false,
    image: images.instruments.inci,
    name: {
      en: "Inci",
      es: "Tumpong",
    },
    slides: [{
      placeOfOrigin: "Philippines",
      flag: images.flags.philippines,
      howItWorks: "The inci..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "janggu",
    value: "J",
    clicked: false,
    image: images.instruments.janggu,
    name: {
      en: "Janggu",
      es: "Janggu",
    },
    slides: [{
      placeOfOrigin: "South Korea",
      flag: images.flags.south_korea,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "khaen",
    value: "K",
    clicked: false,
    image: images.instruments.khaen,
    name: {
      en: "Khaen",
      es: "Khaen",
    },
    slides: [{
      placeOfOrigin: "Thailand",
      flag: images.flags.thailand,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "leier",
    value: "L",
    clicked: false,
    image: images.instruments.leier,
    name: {
      en: "Leier",
      es: "Lira",
    },
    slides: [{
      placeOfOrigin: "Germany",
      flag: images.flags.germany,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "mbira",
    value: "M",
    clicked: false,
    image: images.instruments.mbira,
    name: {
      en: "Mbira",
      es: "Mbira",
    },
    slides: [{
      placeOfOrigin: "Zimbabwe",
      flag: images.flags.zimbabwe,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "native-american-flute",
    value: "N",
    clicked: false,
    image: images.instruments.native_american_flute,
    name: {
      en: "Native American Flute",
      es: "Flauta India",
    },
    slides: [{
      placeOfOrigin: "United States",
      flag: images.flags.united_states,
      howItWorks: "The native american flute..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "oboe",
    value: "O",
    clicked: false,
    image: images.instruments.oboe,
    name: {
      en: "Oboe",
      es: "Oboe",
    },
    slides: [{
      placeOfOrigin: "Europe",
      flag: images.flags.european_union,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "piano",
    value: "P",
    clicked: false,
    image: images.instruments.piano,
    name: {
      en: "Piano",
      es: "Piano",
    },
    slides: [{
      placeOfOrigin: "Italy",
      flag: images.flags.italy,
      howItWorks: "The piano..."
    }, {
      instrumentType: "Wind",
      technicalName: "Chordophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "quijada-de-burro",
    value: "Q",
    clicked: false,
    image: images.instruments.quijada_de_burro,
    name: {
      en: "Quijada (Jawbone)",
      es: "Quijada de Burro",
    },
    slides: [{
      placeOfOrigin: "Africa",
      flag: images.flags.african_union,
      howItWorks: "The jawbone is cleaned and dried to make the teeth loose and rattle. This makes a loud buzzing sound."
    }, {
      instrumentType: "Percussion",
      technicalName: "Idiophone",
      material: "animal bone"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "rabab",
    value: "R",
    clicked: false,
    image: images.instruments.rabab,
    name: {
      en: "Rubab",
      es: "Robab",
    },
    slides: [{
      placeOfOrigin: "Afghanistan",
      flag: images.flags.afghanistan,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "sitar",
    value: "S",
    clicked: false,
    image: images.instruments.sitar,
    name: {
      en: "Sitar",
      es: "Sitar",
    },
    slides: [{
      placeOfOrigin: "India",
      flag: images.flags.india,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Chordophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "taiko",
    value: "T",
    clicked: false,
    image: images.instruments.taiko,
    name: {
      en: "Taiko",
      es: "Taiko",
    },
    slides: [{
      placeOfOrigin: "Japan",
      flag: images.flags.japan,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "ukulele",
    value: "U",
    clicked: false,
    image: images.instruments.ukulele,
    name: {
      en: "Ukulele",
      es: "Ukelele",
    },
    slides: [{
      placeOfOrigin: "Hawaii",
      flag: images.flags.hawaii,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "String",
      technicalName: "Chordophone",
      material: "Wood"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "violin",
    value: "V",
    clicked: false,
    image: images.instruments.violin,
    name: {
      en: "Violin",
      es: "Violín",
    },
    slides: [{
      placeOfOrigin: "Italy",
      flag: images.flags.italy,
      howItWorks: "The violin..."
    }, {
      instrumentType: "String",
      technicalName: "Chordophone",
      material: "wood"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "arts"
  },
  {
    id: "waterphone",
    value: "W",
    clicked: false,
    image: images.instruments.waterphone,
    name: {
      en: "Waterphone",
      es: "Waterphone",
    },
    slides: [{
      placeOfOrigin: "United States",
      flag: images.flags.united_states,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "xalam",
    value: "X",
    clicked: false,
    image: images.instruments.xalam,
    name: {
      en: "Xalam",
      es: "Xalam",
    },
    slides: [{
      placeOfOrigin: "Africa",
      flag: images.flags.african_union,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "yuka",
    value: "Y",
    clicked: false,
    image: images.instruments.yuka,
    name: {
      en: "Yuka",
      es: "Yuka",
    },
    slides: [{
      placeOfOrigin: "Cuba",
      flag: images.flags.cuba,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "arts"
  },
  {
    id: "zarb",
    value: "Z",
    clicked: false,
    image: images.instruments.zarb,
    name: {
      en: "Zarb",
      es: "Tombak",
    },
    slides: [{
      placeOfOrigin: "Iran",
      flag: images.flags.iran,
      howItWorks: "The harmonica..."
    }, {
      instrumentType: "Wind",
      technicalName: "Aerophone",
      material: "brass, stainless steel or bronze"
    }, {
      video: "https://www.youtube.com/embed/yNNASyshhnQ?si=LAP0cu7tnvQ9nkYW&amp;clip=UgkxCEyAJ4URGHHF7DU4rNcVjiB_N0mBdKaL&amp;clipt=EKCBChjc1gs&modestbranding=1"
    }],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: true,
    category: "arts"
  },
];

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////// MATHEMATICS ////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

export const mathArray = [
  {
    id: "1",
    value: 1,
    clicked: false,
    image: images.numbers.apple,
    name: {
      en: "one",
      es: "uno",
    },
    tiles: ["Al-li-", "ga-", "tor"],
    syllables: ["Al", "li", "ga", "tor"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "2",
    value: 2,
    clicked: false,
    image: images.numbers.uvas,
    name: {
      en: "two",
      es: "dos",
    },
    tiles: ["Ba-boon"],
    syllables: ["Ba", "boon"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "3",
    value: 3,
    clicked: false,
    image: images.numbers.cherry,
    name: {
      en: "three",
      es: "tres",
    },
    tiles: ["Chim-", "pan-", "zee"],
    syllables: ["Chim", "pan", "zee"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "4",
    value: 4,
    clicked: false,
    image: images.numbers.velvet_tamarind,
    name: {
      en: "four",
      es: "cuatro",
    },
    tiles: ["Din-go"],
    syllables: ["Din", "go"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "5",
    value: 5,
    clicked: false,
    image: images.numbers.fig,
    name: {
      en: "five",
      es: "cinco",
    },
    tiles: ["El-e-", "phant"],
    syllables: ["El", "e", "phant"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "6",
    value: 6,
    clicked: false,
    image: images.numbers.starfruit,
    name: {
      en: "six",
      es: "seis",
    },
    tiles: ["Frog"],
    syllables: ["Frog"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "7",
    value: 7,
    clicked: false,
    image: images.numbers.guava,
    name: {
      en: "seven",
      es: "siete",
    },
    tiles: ["Go-", "ril-la"],
    syllables: ["Go", "ril", "la"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "8",
    value: 8,
    clicked: false,
    image: images.numbers.horned_melon,
    name: {
      en: "eight",
      es: "ocho",
    },
    tiles: ["Hy-e-na"],
    syllables: ["Hy", "e", "na"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "9",
    value: 9,
    clicked: false,
    image: images.numbers.eggplant,
    name: {
      en: "nine",
      es: "nueve",
    },
    tiles: ["Im-", "pal-a"],
    syllables: ["Im", "pal", "a"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "10",
    value: 10,
    clicked: false,
    image: images.numbers.rambutan,
    name: {
      en: "ten",
      es: "diez",
    },
    tiles: ["Jag-", "u-ar"],
    syllables: ["Jag", "u", "ar"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "11",
    value: 11,
    clicked: false,
    image: images.numbers.coconut,
    name: {
      en: "eleven",
      es: "once",
    },
    tiles: ["Ko-", "a-la"],
    syllables: ["Ko", "a", "la"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "12",
    value: 12,
    clicked: false,
    image: images.numbers.pear,
    name: {
      en: "twelve",
      es: "doce",
    },
    tiles: ["Le-mur"],
    syllables: ["Le", "mur"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "13",
    value: 13,
    clicked: false,
    image: images.numbers.mango,
    name: {
      en: "thirteen",
      es: "trece",
    },
    tiles: ["Ma-caw"],
    syllables: ["Ma", "caw"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "14",
    value: 14,
    clicked: false,
    image: images.numbers.nectarine,
    name: {
      en: "fourteen",
      es: "catorce",
    },
    tiles: ["Num-bat"],
    syllables: ["Num", "bat"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "15",
    value: 15,
    clicked: false,
    image: images.numbers.quince,
    name: {
      en: "fifteen",
      es: "quince",
    },
    tiles: ["O-ka-pi"],
    syllables: ["O", "ka", "pi"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "16",
    value: 16,
    clicked: false,
    image: images.numbers.pear,
    name: {
      en: "sixteen",
      es: "dieciséis",
    },
    tiles: ["Pan-da"],
    syllables: ["Pan", "da"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "17",
    value: 17,
    clicked: false,
    image: images.numbers.banana,
    name: {
      en: "seventeen",
      es: "diecisiete",
    },
    tiles: ["Quet-", "zal"],
    syllables: ["Quet", "zal"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "18",
    value: 18,
    clicked: false,
    image: images.numbers.raspberry,
    name: {
      en: "eighteen",
      es: "dieciocho",
    },
    tiles: ["Rhi-", "noc-", "er-os"],
    syllables: ["Rhi", "noc", "er", "os"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "19",
    value: 19,
    clicked: false,
    image: images.numbers.strawberry,
    name: {
      en: "nineteen",
      es: "diecinueve",
    },
    tiles: ["Snake"],
    syllables: ["Snake"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "20",
    value: 20,
    clicked: false,
    image: images.numbers.indian_gooseberry,
    name: {
      en: "Twenty",
      es: "veinte",
    },
    tiles: ["Ti-ger"],
    syllables: ["Ti", "ger"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "21",
    value: 21,
    clicked: false,
    image: images.numbers.kiwi,
    name: {
      en: "twenty-one",
      es: "veintiuno",
    },
    tiles: ["U-nau"],
    syllables: ["U", "nau"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "22",
    value: 22,
    clicked: false,
    image: images.numbers.kiwi,
    name: {
      en: "twenty-two",
      es: "veintidós",
    },
    tiles: [["Ver-vet"], ["Mon-key"]],
    syllables: [
      ["Ver", "vet"],
      ["Mon", "key"],
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    horizontal: false,
    isLiked: false,
    category: "math"
  },
  {
    id: "23",
    value: 23,
    clicked: false,
    image: images.numbers.watermelon,
    name: {
      en: "twenty-three",
      es: "veintitrés",
    },
    tiles: ["Wart-", "hog"],
    syllables: ["Wart", "hog"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "24",
    value: 24,
    clicked: false,
    image: images.numbers.blueberry,
    name: {
      en: "twenty-four",
      es: "veinticuatro",
    },
    tiles: ["Xe-nops"],
    syllables: ["Xe", "nops"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "25",
    value: 25,
    clicked: false,
    image: images.numbers.uvas,
    name: {
      en: "twenty-five",
      es: "veinticinco",
    },
    tiles: [["Yel-low"], ["Mon-", "goose"]],
    syllables: [
      ["Yel", "low"],
      ["Mon", "goose"],
    ],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "26",
    value: 26,
    clicked: false,
    image: images.numbers.uvas,
    name: {
      en: "twenty-six",
      es: "veintiséis",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "27",
    value: 27,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "twenty-seven",
      es: "veintisiete",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "28",
    value: 28,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "twenty-eight",
      es: "veintiocho",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "29",
    value: 29,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "twenty-nine",
      es: "veintinueve",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
  {
    id: "30",
    value: 30,
    clicked: false,
    image: images.numbers.dragonfruit,
    name: {
      en: "thirty",
      es: "treinta",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    soundEffect: [sounds.animals.frog, sounds.animals.okapi], 
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
    category: "math"
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// zebrAPI Model Implementation /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////

// Content Array Model/Template
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
