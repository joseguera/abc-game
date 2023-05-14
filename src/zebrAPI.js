// Design for  zebrAPI which is the backbone of the Aby Zebra web app

import images from "./images/index.js";
import gorillaSound from "./sounds/gorilla.mp3";
import xenopsSound from "./sounds/xenops.wav";

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
      eng: "Alligator",
      spa: "Caimán",
    },
    tiles: ["Al-li-", "ga-", "tor"],
    syllables: ["Al", "li", "ga", "tor"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    horizontal: true,
    isLiked: true,
  },
  {
    id: "baboon",
    value: "B",
    clicked: false,
    image: images.animals.baboon,
    name: {
      eng: "Baboon",
      spa: "Mandril",
    },
    tiles: ["Ba-boon"],
    syllables: ["Ba", "boon"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "chimpanzee",
    value: "C",
    clicked: false,
    image: images.animals.chimpanzee,
    name: {
      eng: "Chimpanzee",
      spa: "Chimpancé",
    },
    tiles: ["Chim-", "pan-", "zee"],
    syllables: ["Chim", "pan", "zee"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "dingo",
    value: "D",
    clicked: false,
    image: images.animals.dingo,
    name: {
      eng: "Dingo",
      spa: "Dingo",
    },
    tiles: ["Din-go"],
    syllables: ["Din", "go"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "elephant",
    value: "E",
    clicked: false,
    image: images.animals.elephant,
    name: {
      eng: "Elephant",
      spa: "Elefante",
    },
    tiles: ["El-e-", "phant"],
    syllables: ["El", "e", "phant"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "frog",
    value: "F",
    clicked: false,
    image: images.animals.frog,
    name: {
      eng: "Frog",
      spa: "Rana",
    },
    tiles: ["Frog"],
    syllables: ["Frog"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "gorilla",
    value: "G",
    clicked: false,
    image: images.animals.gorilla,
    name: {
      eng: "Gorilla",
      spa: "Gorila",
    },
    tiles: ["Go-", "ril-la"],
    syllables: ["Go", "ril", "la"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
    soundEffect: gorillaSound,
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "hyena",
    value: "H",
    clicked: false,
    image: images.animals.hyena,
    name: {
      eng: "Hyena",
      spa: "Hiena",
    },
    tiles: ["Hy-e-na"],
    syllables: ["Hy", "e", "na"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "impala",
    value: "I",
    clicked: false,
    image: images.animals.impala,
    name: {
      eng: "Impala",
      spa: "Impala",
    },
    tiles: ["Im-", "pal-a"],
    syllables: ["Im", "pal", "a"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "jaguar",
    value: "J",
    clicked: false,
    image: images.animals.jaguar,
    name: {
      eng: "Jaguar",
      spa: "Jaguar",
    },
    tiles: ["Jag-", "u-ar"],
    syllables: ["Jag", "u", "ar"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "koala",
    value: "K",
    clicked: false,
    image: images.animals.koala,
    name: {
      eng: "Koala",
      spa: "Coala",
    },
    tiles: ["Ko-", "a-la"],
    syllables: ["Ko", "a", "la"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "lemur",
    value: "L",
    clicked: false,
    image: images.animals.lemur,
    name: {
      eng: "Lemur",
      spa: "Lémur",
    },
    tiles: ["Le-mur"],
    syllables: ["Le", "mur"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "macaw",
    value: "M",
    clicked: false,
    image: images.animals.macaw,
    name: {
      eng: "Macaw",
      spa: "Guacamaya",
    },
    tiles: ["Ma-caw"],
    syllables: ["Ma", "caw"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "numbat",
    value: "N",
    clicked: false,
    image: images.animals.numbat,
    name: {
      eng: "Numbat",
      spa: "Numbat",
    },
    tiles: ["Num-bat"],
    syllables: ["Num", "bat"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "okapi",
    value: "O",
    clicked: false,
    image: images.animals.okapi,
    name: {
      eng: "Okapi",
      spa: "Okapi",
    },
    tiles: ["O-ka-pi"],
    syllables: ["O", "ka", "pi"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "panda",
    value: "P",
    clicked: false,
    image: images.animals.panda,
    name: {
      eng: "Panda",
      spa: "Panda",
    },
    tiles: ["Pan-da"],
    syllables: ["Pan", "da"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "quetzal",
    value: "Q",
    clicked: false,
    image: images.animals.quetzal,
    name: {
      eng: "Quetzal",
      spa: "Quetzal",
    },
    tiles: ["Quet-", "zal"],
    syllables: ["Quet", "zal"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "rhinoceros",
    value: "R",
    clicked: false,
    image: images.animals.rhinoceros,
    name: {
      eng: "Rhinoceros",
      spa: "Rinoceronte",
    },
    tiles: ["Rhi-", "noc-", "er-os"],
    syllables: ["Rhi", "noc", "er", "os"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "snake",
    value: "S",
    clicked: false,
    image: images.animals.snake,
    name: {
      eng: "Snake",
      spa: "Serpiente",
    },
    tiles: ["Snake"],
    syllables: ["Snake"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "tiger",
    value: "T",
    clicked: false,
    image: images.animals.tiger,
    name: {
      eng: "Tiger",
      spa: "Tigre",
    },
    tiles: ["Ti-ger"],
    syllables: ["Ti", "ger"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "unau",
    value: "U",
    clicked: false,
    image: images.animals.unau,
    name: {
      eng: "Unau",
      spa: "Perezoso",
    },
    tiles: ["U-nau"],
    syllables: ["U", "nau"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "vervet-monkey",
    value: "V",
    clicked: false,
    image: images.animals.vervet_monkey,
    name: {
      eng: "Vervet Monkey",
      spa: "Mono Vervet",
    },
    tiles: [["Ver-vet"], ["Mon-key"]],
    syllables: [
      ["Ver", "vet"],
      ["Mon", "key"],
    ],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "warthog",
    value: "W",
    clicked: false,
    image: images.animals.warthog,
    name: {
      eng: "Warthog",
      spa: "Jabalí",
    },
    tiles: ["Wart-", "hog"],
    syllables: ["Wart", "hog"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "xenops",
    value: "X",
    clicked: false,
    image: images.animals.xenops,
    name: {
      eng: "Xenops",
      spa: "Xenops",
    },
    tiles: ["Xe-nops"],
    syllables: ["Xe", "nops"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
    soundEffect: xenopsSound,
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "yellow-mongoose",
    value: "Y",
    clicked: false,
    image: images.animals.yellow_mongoose,
    name: {
      eng: "Yellow Mongoose",
      spa: "Mangosta Amarilla",
    },
    tiles: [["Yel-low"], ["Mon-", "goose"]],
    syllables: [
      ["Yel", "low"],
      ["Mon", "goose"],
    ],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "zebra",
    value: "Z",
    clicked: false,
    image: images.animals.zebra,
    name: {
      eng: "Zebra",
      spa: "Zebra",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    soundEffect:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/Alligatorbellowedit.ogg",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: true,
  },
];

export const animalSyllables = {
  A: {
    al: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_1_pfcrda.mp3",
    li: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_2_upcmbv.mp3",
    ga: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_3_h1a4kp.mp3",
    tor: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_4_kl1tng.mp3",
  },
  B: {
    ba: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_1_itfivg.mp3",
    boon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_2_ncorah.mp3",
  },
  C: {
    chim: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_1_qcfs5u.mp3",
    pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_2_besjij.mp3",
    zee: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_3_c9jbgo.mp3",
  },
  D: {
    din: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_1_uisizq.mp3",
    go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_2_ksewju.mp3",
  },
  E: {
    el: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_1_x7njho.mp3",
    e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/elephant_2_tpecbo.mp3",
    phant:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_3_ifv1kp.mp3",
  },
  F: {
    frog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/frog_1_ziaz9v.mp3",
  },
  G: {
    go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_1_ml8hee.mp3",
    ril: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_2_e4b1vh.mp3",
    la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_3_lj7nc5.mp3",
  },
  H: {
    hy: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_1_nmxsgi.mp3",
    e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_2_vbkgbo.mp3",
    na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_3_nefma3.mp3",
  },
  I: {
    im: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_1_uwkk50.mp3",
    pal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_2_qbm7el.mp3",
    a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_3_w5g2rc.mp3",
  },
  J: {
    jag: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/jaguar_1_rsytkv.mp3",
    u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_2_yvkrbl.mp3",
    ar: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_3_qjl6n0.mp3",
  },
  K: {
    ko: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_1_aczrfi.mp3",
    a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_2_fzcj6v.mp3",
    la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_3_dlcaiz.mp3",
  },
  L: {
    le: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_1_snqqev.mp3",
    mur: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_2_i58c0k.mp3",
  },
  M: {
    ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_1_v3cwcl.mp3",
    caw: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_2_qhttqp.mp3",
  },
  N: {
    num: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_1_db9zmv.mp3",
    bat: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_2_anah1d.mp3",
  },
  O: {
    o: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/okapi_1_sw3dtv.mp3",
    ka: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_2_vfwlga.mp3",
    pi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_3_h0flxr.mp3",
  },
  P: {
    pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_1_mpjyto.mp3",
    da: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_2_uczfub.mp3",
  },
  Q: {
    quet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/quetzal_1_m6re23.mp3",
    zal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/quetzal_2_zrctiz.mp3",
  },
  R: {
    rhi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_1_thiixg.mp3",
    noc: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_2_dwczll.mp3",
    er: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_3_a5nanz.mp3",
    os: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_4_ci6fpm.mp3",
  },
  S: {
    snake:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/snake_1_uudc5b.mp3",
  },
  T: {
    ti: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_1_cmeugy.mp3",
    ger: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_2_dmfmjj.mp3",
  },
  U: {
    u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/unau_1_ujzyfb.mp3",
    nau: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/unau_2_ce3igp.mp3",
  },
  V: {
    ver: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_1_xvowle.mp3",
    vet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_2_haaszc.mp3",
    mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_3_v9rfek.mp3",
    key: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_4_mxlxbg.mp3",
  },
  W: {
    wart: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_1_iysnah.mp3",
    hog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_2_fu4elu.mp3",
  },
  X: {
    xe: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_1_zgooqe.mp3",
    nops: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_2_kpnjv5.mp3",
  },
  Y: {
    yel: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_1_m8jdxg.mp3",
    low: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_2_bdw2zz.mp3",
    mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_3_su0kmh.mp3",
    goose:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_4_bivqec.mp3",
  },
  Z: {
    ze: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_1_cnq15e.mp3",
    bra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_2_gflttj.mp3",
  },
};

export const alphabetLetterSounds = {
  alphabet: {
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
    Z: "https://res.cloudinary.com/djqxogkfw/video/upload/v1667695626/alphabet-letters-spoken/Z.mp3",
  },
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
      eng: "Aeolian Harp",
      spa: "Caimán",
    },
    tiles: ["Al-li-", "ga-", "tor"],
    syllables: ["Al", "li", "ga", "tor"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    horizontal: true,
    isLiked: true,
  },
  {
    id: "bell-tree",
    value: "B",
    clicked: false,
    image: images.instruments.bell_tree,
    name: {
      eng: "Bell Tree",
      spa: "Mandril",
    },
    tiles: ["Ba-boon"],
    syllables: ["Ba", "boon"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    horizontal: false,
    isLiked: true,
  },
  {
    id: "cuica",
    value: "C",
    clicked: false,
    image: images.instruments.cuica,
    name: {
      eng: "Cuíca",
      spa: "Chimpancé",
    },
    tiles: ["Chim-", "pan-", "zee"],
    syllables: ["Chim", "pan", "zee"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "didgeridoo",
    value: "D",
    clicked: false,
    image: images.instruments.didgeridoo,
    name: {
      eng: "Didgeridoo",
      spa: "Dingo",
    },
    tiles: ["Din-go"],
    syllables: ["Din", "go"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "electric-bass",
    value: "E",
    clicked: false,
    image: "image.png",
    name: {
      eng: "Electric Bass",
      spa: "Elefante",
    },
    tiles: ["El-e-", "phant"],
    syllables: ["El", "e", "phant"],
    nameSound: images.instruments.electric_bass,
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "french-horn",
    value: "F",
    clicked: false,
    image: images.instruments.french_horn,
    name: {
      eng: "French Horn",
      spa: "Rana",
    },
    tiles: ["Frog"],
    syllables: ["Frog"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "gamelatron",
    value: "G",
    clicked: false,
    image: images.instruments.gamelatron,
    name: {
      eng: "Gamelatron",
      spa: "Gorila",
    },
    tiles: ["Go-", "ril-la"],
    syllables: ["Go", "ril", "la"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "harmonica",
    value: "H",
    clicked: false,
    image: images.instruments.harmonica,
    name: {
      eng: "Harmonica",
      spa: "Hiena",
    },
    tiles: ["Hy-e-na"],
    syllables: ["Hy", "e", "na"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "inci",
    value: "I",
    clicked: false,
    image: images.instruments.inci,
    name: {
      eng: "Inci",
      spa: "Impala",
    },
    tiles: ["Im-", "pal-a"],
    syllables: ["Im", "pal", "a"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "janggu",
    value: "J",
    clicked: false,
    image: images.instruments.janggu,
    name: {
      eng: "Janggu",
      spa: "Jaguar",
    },
    tiles: ["Jag-", "u-ar"],
    syllables: ["Jag", "u", "ar"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "khaen",
    value: "K",
    clicked: false,
    image: images.instruments.khaen,
    name: {
      eng: "Khaen",
      spa: "Coala",
    },
    tiles: ["Ko-", "a-la"],
    syllables: ["Ko", "a", "la"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "leier",
    value: "L",
    clicked: false,
    image: images.instruments.leier,
    name: {
      eng: "Leier",
      spa: "Lémur",
    },
    tiles: ["Le-mur"],
    syllables: ["Le", "mur"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "mbira",
    value: "M",
    clicked: false,
    image: images.instruments.mbira,
    name: {
      eng: "Mbira",
      spa: "Guacamaya",
    },
    tiles: ["Ma-caw"],
    syllables: ["Ma", "caw"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "native-american-flute",
    value: "N",
    clicked: false,
    image: images.instruments.native_american_flute,
    name: {
      eng: "Native American Flute",
      spa: "Numbat",
    },
    tiles: ["Num-bat"],
    syllables: ["Num", "bat"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "oboe",
    value: "O",
    clicked: false,
    image: images.instruments.oboe,
    name: {
      eng: "Oboe",
      spa: "Okapi",
    },
    tiles: ["O-ka-pi"],
    syllables: ["O", "ka", "pi"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "piano",
    value: "P",
    clicked: false,
    image: images.instruments.piano,
    name: {
      eng: "Piano",
      spa: "Panda",
    },
    tiles: ["Pan-da"],
    syllables: ["Pan", "da"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "quijada-de-burro",
    value: "Q",
    clicked: false,
    image: images.instruments.quijada_de_burro,
    name: {
      eng: "Quijada de Burro",
      spa: "Quetzal",
    },
    tiles: ["Quet-", "zal"],
    syllables: ["Quet", "zal"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "rabab",
    value: "R",
    clicked: false,
    image: images.instruments.rabab,
    name: {
      eng: "Rabab",
      spa: "Rinoceronte",
    },
    tiles: ["Rhi-", "noc-", "er-os"],
    syllables: ["Rhi", "noc", "er", "os"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "sitar",
    value: "S",
    clicked: false,
    image: images.instruments.sitar,
    name: {
      eng: "Sitar",
      spa: "Serpiente",
    },
    tiles: ["Snake"],
    syllables: ["Snake"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "taiko",
    value: "T",
    clicked: false,
    image: images.instruments.taiko,
    name: {
      eng: "Taiko",
      spa: "Tigre",
    },
    tiles: ["Ti-ger"],
    syllables: ["Ti", "ger"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "ukulele",
    value: "U",
    clicked: false,
    image: images.instruments.ukulele,
    name: {
      eng: "Ukulele",
      spa: "Perezoso",
    },
    tiles: ["U-nau"],
    syllables: ["U", "nau"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "violin",
    value: "V",
    clicked: false,
    image: images.instruments.violin,
    name: {
      eng: "Violin",
      spa: "Mono Vervet",
    },
    tiles: [["Ver-vet"], ["Mon-key"]],
    syllables: [
      ["Ver", "vet"],
      ["Mon", "key"],
    ],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "waterphone",
    value: "W",
    clicked: false,
    image: images.instruments.waterphone,
    name: {
      eng: "Waterphone",
      spa: "Jabalí",
    },
    tiles: ["Wart-", "hog"],
    syllables: ["Wart", "hog"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "xalam",
    value: "X",
    clicked: false,
    image: images.instruments.xalam,
    name: {
      eng: "Xalam",
      spa: "Xenops",
    },
    tiles: ["Xe-nops"],
    syllables: ["Xe", "nops"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "yuka",
    value: "Y",
    clicked: false,
    image: images.instruments.yuka,
    name: {
      eng: "Yuka",
      spa: "Mangosta Amarilla",
    },
    tiles: [["Yel-low"], ["Mon-", "goose"]],
    syllables: [
      ["Yel", "low"],
      ["Mon", "goose"],
    ],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "zarb",
    value: "Z",
    clicked: false,
    image: images.instruments.zarb,
    name: {
      eng: "Zarb",
      spa: "Zebra",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: true,
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
      eng: "one",
      spa: "uno",
    },
    tiles: ["Al-li-", "ga-", "tor"],
    syllables: ["Al", "li", "ga", "tor"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "2",
    value: 2,
    clicked: false,
    image: images.numbers.apple,
    name: {
      eng: "two",
      spa: "dos",
    },
    tiles: ["Ba-boon"],
    syllables: ["Ba", "boon"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "3",
    value: 3,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/chimp_s0mnxx.png",
    name: {
      eng: "three",
      spa: "tres",
    },
    tiles: ["Chim-", "pan-", "zee"],
    syllables: ["Chim", "pan", "zee"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "4",
    value: 4,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116245/Cory-Images/dingo_hmddgd.png",
    name: {
      eng: "four",
      spa: "cuatro",
    },
    tiles: ["Din-go"],
    syllables: ["Din", "go"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "5",
    value: 5,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/elephant_u4435s.png",
    name: {
      eng: "five",
      spa: "cinco",
    },
    tiles: ["El-e-", "phant"],
    syllables: ["El", "e", "phant"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "6",
    value: 6,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116245/Cory-Images/frog_fomeds.png",
    name: {
      eng: "six",
      spa: "seis",
    },
    tiles: ["Frog"],
    syllables: ["Frog"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "7",
    value: 7,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/gorilla_yjzqej.png",
    name: {
      eng: "seven",
      spa: "siete",
    },
    tiles: ["Go-", "ril-la"],
    syllables: ["Go", "ril", "la"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "8",
    value: 8,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1667582162/Cory-Images/hyena_dzhabn.png",
    name: {
      eng: "eight",
      spa: "ocho",
    },
    tiles: ["Hy-e-na"],
    syllables: ["Hy", "e", "na"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "9",
    value: 9,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1671317903/Cory-Images/impala_qbglhz.png",
    name: {
      eng: "nine",
      spa: "nueve",
    },
    tiles: ["Im-", "pal-a"],
    syllables: ["Im", "pal", "a"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "10",
    value: 10,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725651/Cory-Images/jaguar_vpi3s0.png",
    name: {
      eng: "ten",
      spa: "diez",
    },
    tiles: ["Jag-", "u-ar"],
    syllables: ["Jag", "u", "ar"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "11",
    value: 11,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116250/Cory-Images/koala_x4wwtd.png",
    name: {
      eng: "eleven",
      spa: "once",
    },
    tiles: ["Ko-", "a-la"],
    syllables: ["Ko", "a", "la"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "12",
    value: 12,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1671317901/Cory-Images/lemur_k4gg9o.png",
    name: {
      eng: "twelve",
      spa: "doce",
    },
    tiles: ["Le-mur"],
    syllables: ["Le", "mur"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "13",
    value: 13,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725651/Cory-Images/macaw_wxuj7o.png",
    name: {
      eng: "thirteen",
      spa: "trece",
    },
    tiles: ["Ma-caw"],
    syllables: ["Ma", "caw"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "14",
    value: 14,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1671317909/Cory-Images/numbat_bwu8od.png",
    name: {
      eng: "fourteen",
      spa: "catorce",
    },
    tiles: ["Num-bat"],
    syllables: ["Num", "bat"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "15",
    value: 15,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/okapi_m5hjmr.png",
    name: {
      eng: "fifteen",
      spa: "quince",
    },
    tiles: ["O-ka-pi"],
    syllables: ["O", "ka", "pi"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "16",
    value: 16,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666736835/Cory-Images/panda_gc28ha.png",
    name: {
      eng: "sixteen",
      spa: "dieciséis",
    },
    tiles: ["Pan-da"],
    syllables: ["Pan", "da"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "17",
    value: 17,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1676997505/Cory-Images/quetzal_nqwjsz.png",
    name: {
      eng: "seventeen",
      spa: "diecisiete",
    },
    tiles: ["Quet-", "zal"],
    syllables: ["Quet", "zal"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "18",
    value: 18,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/rhinoceros_ljtw0h.png",
    name: {
      eng: "eighteen",
      spa: "dieciocho",
    },
    tiles: ["Rhi-", "noc-", "er-os"],
    syllables: ["Rhi", "noc", "er", "os"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "19",
    value: 19,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1676997504/Cory-Images/snake_tr8orp.png",
    name: {
      eng: "nineteen",
      spa: "diecinueve",
    },
    tiles: ["Snake"],
    syllables: ["Snake"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "20",
    value: 20,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/tiger_s2y1l4.png",
    name: {
      eng: "Twenty",
      spa: "veinte",
    },
    tiles: ["Ti-ger"],
    syllables: ["Ti", "ger"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "21",
    value: 21,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/sloth_tw82gs.png",
    name: {
      eng: "twenty-one",
      spa: "veintiuno",
    },
    tiles: ["U-nau"],
    syllables: ["U", "nau"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "22",
    value: 22,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/vervet_pwgmks.png",
    name: {
      eng: "twenty-two",
      spa: "veintidós",
    },
    tiles: [["Ver-vet"], ["Mon-key"]],
    syllables: [
      ["Ver", "vet"],
      ["Mon", "key"],
    ],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
    ],
    horizontal: false,
    isLiked: false,
  },
  {
    id: "23",
    value: 23,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/warthog_ne88og.png",
    name: {
      eng: "twenty-three",
      spa: "veintitrés",
    },
    tiles: ["Wart-", "hog"],
    syllables: ["Wart", "hog"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "24",
    value: 24,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116248/Cory-Images/xenops_fgylga.png",
    name: {
      eng: "twenty-four",
      spa: "veinticuatro",
    },
    tiles: ["Xe-nops"],
    syllables: ["Xe", "nops"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "25",
    value: 25,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/mongoose_ieo5rn.png",
    name: {
      eng: "twenty-five",
      spa: "veinticinco",
    },
    tiles: [["Yel-low"], ["Mon-", "goose"]],
    syllables: [
      ["Yel", "low"],
      ["Mon", "goose"],
    ],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "26",
    value: 26,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/zebra_whhuqc.png",
    name: {
      eng: "twenty-six",
      spa: "veintiséis",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
  },
  {
    id: "27",
    value: 27,
    clicked: false,
    image:
      "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/zebra_whhuqc.png",
    name: {
      eng: "twenty-seven",
      spa: "veintisiete",
    },
    tiles: ["Ze-bra"],
    syllables: ["Ze", "bra"],
    nameSound:
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
    funFacts: [
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
      "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
    ],
    horizontal: true,
    isLiked: false,
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
