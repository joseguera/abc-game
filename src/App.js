import React, { useState } from "react";
import { zebrAPI } from "./zebrAPI";
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

export default function App() {
  ///////// IMPROVEMENT NOTE /////////
  /*
    Other keys that need to be added to the alphabet objects are:
    - category : 'grassland-tropical'
    - animalName : 
    - animalPicture : 'some file name or external link'
    - etc...
  */

  const [alphabet, setAlphabet] = useLocalStorage("alphabet", [
    {
      id: 1,
      value: "A",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725655/Cory-Images/alligator_e1xwoj.png",
      animalName: "Alligator",
      tiles: ["Al-li-", "ga-", "tor"],
      syllables: ["Al", "li", "ga", "tor"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/alligator_ipbeqb.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact1_jzvtc3.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/alligator_fact2_krxfag.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/alligator_fact3_kudvzs.mp3",
      ],
      horizontal: true,
      isLiked: true,
    },
    {
      id: 2,
      value: "B",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116248/Cory-Images/baboon_jr7qvu.png",
      animalName: "Baboon",
      tiles: ["Ba-boon"],
      syllables: ["Ba", "boon"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/baboon_f4s3in.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact1_vhvzyk.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661498/animal_facts_audio/baboon_fact2_jh0az6.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/baboon_fact3_a7j7vh.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 3,
      value: "C",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/chimp_s0mnxx.png",
      animalName: "Chimpanzee",
      tiles: ["Chim-", "pan-", "zee"],
      syllables: ["Chim", "pan", "zee"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671648469/animal-sounds/chimpanzee_fralis.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/chimpanzee_fact1_qv9lyc.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact2_uhizwa.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/chimpanzee_fact3_qnnklm.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 4,
      value: "D",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116245/Cory-Images/dingo_hmddgd.png",
      animalName: "Dingo",
      tiles: ["Din-go"],
      syllables: ["Din", "go"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/dingo_vbeznb.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact1_kswj5g.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/dingo_fact2_n1ijx8.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/dingo_fact3_ow5mgy.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 5,
      value: "E",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/elephant_u4435s.png",
      animalName: "Elephant",
      tiles: ["El-e-", "phant"],
      syllables: ["El", "e", "phant"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/elephant_ja0xof.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/elephant_fact1_ejcgdf.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/elephant_fact2_hacxsi.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/elephant_fact3_dx6jql.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 6,
      value: "F",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116245/Cory-Images/frog_fomeds.png",
      animalName: "Frog",
      tiles: ["Frog"],
      syllables: ["Frog"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795180/animal-sounds/frog_hqdv08.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/frog_fact1_rfrsgr.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact2_ng3wgh.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/frog_fact3_glvaz1.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 7,
      value: "G",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116247/Cory-Images/gorilla_yjzqej.png",
      animalName: "Gorilla",
      tiles: ["Go-", "ril-la"],
      syllables: ["Go", "ril", "la"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/gorilla_nu73cy.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact1_cgq79y.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/gorilla_fact2_bxywsw.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/gorilla_fact3_wudgzl.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 8,
      value: "H",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1667582162/Cory-Images/hyena_dzhabn.png",
      animalName: "Hyena",
      tiles: ["Hy-e-na"],
      syllables: ["Hy", "e", "na"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/hyena_uvck0i.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact1_qtugg1.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/hyena_fact2_qzdyqx.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/hyena_fact3_hytr4n.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 9,
      value: "I",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1671317903/Cory-Images/impala_qbglhz.png",
      animalName: "Impala",
      tiles: ["Im-", "pal-a"],
      syllables: ["Im", "pal", "a"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/impala_sz5oq8.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact1_nq6zzx.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact2_wc1yil.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661505/animal_facts_audio/impala_fact3_kul7g5.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 10,
      value: "J",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725651/Cory-Images/jaguar_vpi3s0.png",
      animalName: "Jaguar",
      tiles: ["Jag-", "u-ar"],
      syllables: ["Jag", "u", "ar"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/jaguar_augfbp.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact1_nfjkrf.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact2_tnqran.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/jaguar_fact3_clfmtr.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 11,
      value: "K",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116250/Cory-Images/koala_x4wwtd.png",
      animalName: "Koala",
      tiles: ["Ko-", "a-la"],
      syllables: ["Ko", "a", "la"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/koala_xamipd.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact1_vgfacw.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact2_wzdxnq.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/koala_fact3_nyynb4.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 12,
      value: "L",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1671317901/Cory-Images/lemur_k4gg9o.png",
      animalName: "Lemur",
      tiles: ["Le-mur"],
      syllables: ["Le", "mur"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/lemur_ypjdmr.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact1_rjnhm4.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661506/animal_facts_audio/lemur_fact2_sthf0x.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/lemur_fact3_dechin.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 13,
      value: "M",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666725651/Cory-Images/macaw_wxuj7o.png",
      animalName: "Macaw",
      tiles: ["Ma-caw"],
      syllables: ["Ma", "caw"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795181/animal-sounds/macaw_dccou1.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact1_abx8vt.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/macaw_fact2_veofca.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/macaw_fact3_prsu0v.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 14,
      value: "N",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1671317909/Cory-Images/numbat_bwu8od.png",
      animalName: "Numbat",
      tiles: ["Num-bat"],
      syllables: ["Num", "bat"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/numbat_wpfejt.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact1_ymumed.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661507/animal_facts_audio/numbat_fact2_laiinf.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/numbat_fact3_lyn45a.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 15,
      value: "O",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/okapi_m5hjmr.png",
      animalName: "Okapi",
      tiles: ["O-ka-pi"],
      syllables: ["O", "ka", "pi"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/okapi_ukx8lz.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact1_rhj1gd.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact2_y3ajoz.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/okapi_fact3_ogttap.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 16,
      value: "P",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666736835/Cory-Images/panda_gc28ha.png",
      animalName: "Panda",
      tiles: ["Pan-da"],
      syllables: ["Pan", "da"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/panda_o0bz0g.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact1_mpa17k.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661508/animal_facts_audio/panda_fact2_mo56nu.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/panda_fact3_dajist.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 17,
      value: "Q",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/quetzal_wjwfmg.png",
      animalName: "Quetzal",
      tiles: ["Quet-", "zal"],
      syllables: ["Quet", "zal"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/quetzal_ivuema.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact1_mmzilu.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661509/animal_facts_audio/quetzal_fact2_owzkum.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/quetzal_fact3_is9snv.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 18,
      value: "R",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/rhinoceros_ljtw0h.png",
      animalName: "Rhinoceros",
      tiles: ["Rhi-", "noc-", "er-os"],
      syllables: ["Rhi", "noc", "er", "os"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/rhino_zyp4fl.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact1_idngtl.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact2_e4hwic.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/rhinoceros_fact3_ufh40a.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 19,
      value: "S",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/snake_mzfb57.png",
      animalName: "Snake",
      tiles: ["Snake"],
      syllables: ["Snake"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/Snake_ds2byy.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661499/animal_facts_audio/snake_fact1_dxxhpf.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact2_eztwvt.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/snake_fact3_dz53vc.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 20,
      value: "T",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/tiger_s2y1l4.png",
      animalName: "Tiger",
      tiles: ["Ti-ger"],
      syllables: ["Ti", "ger"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/tiger_wfkjkn.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact1_nwba8u.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact2_bnksqa.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661500/animal_facts_audio/tiger_fact3_dluuj4.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 21,
      value: "U",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/sloth_tw82gs.png",
      animalName: "Unau",
      tiles: ["U-nau"],
      syllables: ["U", "nau"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/unau_jwytmf.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact1_ds858v.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact2_hcpoef.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/unau_fact3_mamotq.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 22,
      value: "V",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/vervet_pwgmks.png",
      animalName: "Vervet Monkey",
      tiles: [["Ver-vet"], ["Mon-key"]],
      syllables: [
        ["Ver", "vet"],
        ["Mon", "key"],
      ],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/vervet_monkey_gvims4.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact1_cz2295.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact2_ycapu7.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661501/animal_facts_audio/vervet_monkey_fact3_lfyjzb.mp3",
      ],
      horizontal: false,
      isLiked: false,
    },
    {
      id: 23,
      value: "W",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/warthog_ne88og.png",
      animalName: "Warthog",
      tiles: ["Wart-", "hog"],
      syllables: ["Wart", "hog"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/wildebeest_ugxsq2.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact1_senecj.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact2_czrjpl.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/warthog_fact3_bukixi.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 24,
      value: "X",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1666116248/Cory-Images/xenops_fgylga.png",
      animalName: "Xenops",
      tiles: ["Xe-nops"],
      syllables: ["Xe", "nops"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/xenops_e6rmil.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact1_jecyvz.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact2_kb4twj.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/xenops_fact3_ldtacl.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 25,
      value: "Y",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362393/Cory-Images/TEMP_Images/mongoose_ieo5rn.png",
      animalName: "Yellow Mongoose",
      tiles: [["Yel-low"], ["Mon-", "goose"]],
      syllables: [
        ["Yel", "low"],
        ["Mon", "goose"],
      ],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1660795182/animal-sounds/yellow_mongoose_l39y3w.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661502/animal_facts_audio/yellow_mongoose_fact1_jgd2eq.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact2_ugljou.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/yellow_mongoose_fact3_gaevzy.mp3",
      ],
      horizontal: true,
      isLiked: false,
    },
    {
      id: 26,
      value: "Z",
      clicked: false,
      animalImage:
        "https://res.cloudinary.com/djqxogkfw/image/upload/v1672362394/Cory-Images/TEMP_Images/zebra_whhuqc.png",
      animalName: "Zebra",
      tiles: ["Ze-bra"],
      syllables: ["Ze", "bra"],
      animalNameSound:
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1666114219/animal-sounds/zebra_u99gjw.mp3",
      animalFacts: [
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661503/animal_facts_audio/zebra_fact1_cdpouk.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact2_b6u2js.mp3",
        "https://res.cloudinary.com/djqxogkfw/video/upload/v1671661504/animal_facts_audio/zebra_fact3_hviwtv.mp3",
      ],
      horizontal: true,
      isLiked: true,
    },
  ]);
  const [sounds, setSounds] = useState({
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
  });
  const [detailOpen, setDetailOpen] = useState(false);
  const [loading, isLoading] = useState(false);

  ////////////////////////////////////
  ///////// PARENT FUNCTIONS /////////
  ////////////////////////////////////

  /* 
      handleClose toggles the view from the AlphabetList
      to the LetterDetail
    */
  const handleOpenClose = (letter, audio = new Audio()) => {
    const newList = alphabet.map((element) => {
      if (letter.id === element.id) {
        element.clicked = !element.clicked;
      }
      return element;
    });
    const clicked = detailOpen;
    setAlphabet(newList);
    setDetailOpen(!clicked);
    return audio.volume = 0;
  };

  const handleLike = (id) => {
    const newList = alphabet.map((buttonValue) => {
      if (id === buttonValue.id) {
        buttonValue.isLiked =
          String(buttonValue.isLiked) === "true" ? false : true;
        // console.log(buttonValue.isLiked, buttonValue.isLiked.toString(), String(buttonValue.isLiked))
      }
      return buttonValue;
    });
    setAlphabet(newList);
  };

  ///////// IMPROVEMENT NOTES /////////
  /*
    
  */

  // const hasAnimal = !this.state.isLoading && this.state.animal;

  return (
    <div className="App">
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
                <div className="site-title">
                  <h1 className="titles">Aby Zebra</h1>
                </div>
              </div>
            </div>
          </div>
          {detailOpen ? (
            <CardDetail
              alphabet={alphabet}
              isDetailOpen={detailOpen}
              handleOpenClose={handleOpenClose}
              sounds={sounds.alphabet}
              handleLike={handleLike}
            />
          ) : (
            <ButtonList
              handleOpenClose={handleOpenClose}
              alphabet={alphabet}
              // handleButtonCheck={this.handleButtonCheck}
            />
          )}
          <div className="navBar-holder">
            <div className="navBar-bar">
              <div className="navBar-buttons">
                <div className="navBar-item">
                  <FontAwesomeIcon icon={faListUl} className="navBar-icon" />
                </div>
                <div className="navBar-item">
                  <FontAwesomeIcon icon={faMusic} className="navBar-icon" />
                </div>
                <div className="navBar-item">
                  <FontAwesomeIcon
                    icon={faBookOpenReader}
                    className="navBar-icon"
                  />
                </div>
                <div className="navBar-item">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="navBar-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
