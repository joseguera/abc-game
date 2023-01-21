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
console.log(zebrAPI.science.zoology.alphabet.savanna[0].name.eng);

/*
const [syllables, setSyllables] = useState({
    A: {
      al: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_1_pfcrda.mp3",
      li: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_2_upcmbv.mp3",
      ga: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_3_h1a4kp.mp3",
      tor: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_4_kl1tng.mp3"
    },
    B: {
      ba: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_1_itfivg.mp3", 
      boon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_2_ncorah.mp3",
    },
    C: {
      chim: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_1_qcfs5u.mp3",
      pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_2_besjij.mp3", 
      zee: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_3_c9jbgo.mp3"
    },
    D: {
      din: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_1_uisizq.mp3",
      go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_2_ksewju.mp3"
    },
    E: {
      el: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_1_x7njho.mp3", 
      e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/elephant_2_tpecbo.mp3", 
      phant: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_3_ifv1kp.mp3"
    },
    F: {
      frog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/frog_1_ziaz9v.mp3",
    },
    G: {
      go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_1_ml8hee.mp3", 
      ril: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_2_e4b1vh.mp3",
      la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_3_lj7nc5.mp3"
    },
    H: {
      hy: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_1_nmxsgi.mp3",
      e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_2_vbkgbo.mp3",
      na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_3_nefma3.mp3"
    },
    I: {
      im: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_1_uwkk50.mp3",
      pal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_2_qbm7el.mp3",
      a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_3_w5g2rc.mp3"
    },
    J: {
      jag: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/jaguar_1_rsytkv.mp3",
      u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_2_yvkrbl.mp3",
      ar: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_3_qjl6n0.mp3"
    },
    K: {
      ko: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_1_aczrfi.mp3",
      a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_2_fzcj6v.mp3",
      la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_3_dlcaiz.mp3"
    },
    L: {
      le: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_1_snqqev.mp3",
      mur: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_2_i58c0k.mp3"
    },
    M: {
      ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_1_v3cwcl.mp3",
      caw: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_2_qhttqp.mp3"
    },
    N: {
      num: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_1_db9zmv.mp3",
      bat: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_2_anah1d.mp3"
    },
    O: {
      o: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/okapi_1_sw3dtv.mp3",
      ka: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_2_vfwlga.mp3",
      pi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_3_h0flxr.mp3"
    },
    P: {  
      pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_1_mpjyto.mp3",
      da: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_2_uczfub.mp3"
    },
    Q: {
      quet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/quetzal_1_m6re23.mp3",
      zal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/quetzal_2_zrctiz.mp3"
    },
    R: {
      rhi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_1_thiixg.mp3",
      noc: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_2_dwczll.mp3",
      er: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_3_a5nanz.mp3",
      os: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_4_ci6fpm.mp3"
    },
    S: {
      snake: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/snake_1_uudc5b.mp3",
    },
    T: {
      ti: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_1_cmeugy.mp3",
      ger: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_2_dmfmjj.mp3"
    },
    U: {
      u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/unau_1_ujzyfb.mp3",
      nau: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/unau_2_ce3igp.mp3"
    },
    V: {
      ver: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_1_xvowle.mp3", 
      vet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_2_haaszc.mp3",
      mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_3_v9rfek.mp3",
      key: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_4_mxlxbg.mp3"
    },
    W: {
      wart: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_1_iysnah.mp3", 
      hog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_2_fu4elu.mp3",
    },
    X: {
      xe: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_1_zgooqe.mp3",
      nops: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_2_kpnjv5.mp3"
    },
    Y: {
      yel: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_1_m8jdxg.mp3",
      low: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_2_bdw2zz.mp3",
      mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_3_su0kmh.mp3",
      goose: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_4_bivqec.mp3"
    },
    Z: {
      ze: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_1_cnq15e.mp3", 
      bra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_2_gflttj.mp3"
    }
  })
*/

const alphabetSyllables = {
  A: {
    al: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_1_pfcrda.mp3",
    li: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_2_upcmbv.mp3",
    ga: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_3_h1a4kp.mp3",
    tor: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/alligator_4_kl1tng.mp3"
  },
  B: {
    ba: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_1_itfivg.mp3", 
    boon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441727/animal_name_vowels_audio/baboon_2_ncorah.mp3",
  },
  C: {
    chim: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_1_qcfs5u.mp3",
    pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_2_besjij.mp3", 
    zee: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/chimpanzee_3_c9jbgo.mp3"
  },
  D: {
    din: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_1_uisizq.mp3",
    go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/dingo_2_ksewju.mp3"
  },
  E: {
    el: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_1_x7njho.mp3", 
    e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/elephant_2_tpecbo.mp3", 
    phant: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/elephant_3_ifv1kp.mp3"
  },
  F: {
    frog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/frog_1_ziaz9v.mp3",
  },
  G: {
    go: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_1_ml8hee.mp3", 
    ril: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_2_e4b1vh.mp3",
    la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441728/animal_name_vowels_audio/gorilla_3_lj7nc5.mp3"
  },
  H: {
    hy: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_1_nmxsgi.mp3",
    e: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_2_vbkgbo.mp3",
    na: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/hyena_3_nefma3.mp3"
  },
  I: {
    im: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_1_uwkk50.mp3",
    pal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_2_qbm7el.mp3",
    a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/impala_3_w5g2rc.mp3"
  },
  J: {
    jag: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/jaguar_1_rsytkv.mp3",
    u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_2_yvkrbl.mp3",
    ar: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/jaguar_3_qjl6n0.mp3"
  },
  K: {
    ko: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_1_aczrfi.mp3",
    a: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_2_fzcj6v.mp3",
    la: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441729/animal_name_vowels_audio/koala_3_dlcaiz.mp3"
  },
  L: {
    le: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_1_snqqev.mp3",
    mur: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/lemur_2_i58c0k.mp3"
  },
  M: {
    ma: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_1_v3cwcl.mp3",
    caw: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/macaw_2_qhttqp.mp3"
  },
  N: {
    num: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_1_db9zmv.mp3",
    bat: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/numbat_2_anah1d.mp3"
  },
  O: {
    o: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/okapi_1_sw3dtv.mp3",
    ka: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_2_vfwlga.mp3",
    pi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/okapi_3_h0flxr.mp3"
  },
  P: {  
    pan: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_1_mpjyto.mp3",
    da: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/panda_2_uczfub.mp3"
  },
  Q: {
    quet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441730/animal_name_vowels_audio/quetzal_1_m6re23.mp3",
    zal: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/quetzal_2_zrctiz.mp3"
  },
  R: {
    rhi: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_1_thiixg.mp3",
    noc: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_2_dwczll.mp3",
    er: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_3_a5nanz.mp3",
    os: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/rhinoceros_4_ci6fpm.mp3"
  },
  S: {
    snake: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/snake_1_uudc5b.mp3",
  },
  T: {
    ti: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_1_cmeugy.mp3",
    ger: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/tiger_2_dmfmjj.mp3"
  },
  U: {
    u: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/unau_1_ujzyfb.mp3",
    nau: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/unau_2_ce3igp.mp3"
  },
  V: {
    ver: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_1_xvowle.mp3", 
    vet: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441731/animal_name_vowels_audio/vervet_monkey_2_haaszc.mp3",
    mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_3_v9rfek.mp3",
    key: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/vervet_monkey_4_mxlxbg.mp3"
  },
  W: {
    wart: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_1_iysnah.mp3", 
    hog: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/warthog_2_fu4elu.mp3",
  },
  X: {
    xe: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_1_zgooqe.mp3",
    nops: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/xenops_2_kpnjv5.mp3"
  },
  Y: {
    yel: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_1_m8jdxg.mp3",
    low: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_2_bdw2zz.mp3",
    mon: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_3_su0kmh.mp3",
    goose: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/yellow_mongoose_4_bivqec.mp3"
  },
  Z: {
    ze: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_1_cnq15e.mp3", 
    bra: "https://res.cloudinary.com/djqxogkfw/video/upload/v1672441732/animal_name_vowels_audio/zebra_2_gflttj.mp3"
  }
}

console.log(alphabetSyllables["A"]["al"])

/*

function isPrimeNumber(n) {
  for (var i = 2; i < n; i++) { // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
    if(n % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
  }
  return n > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
}


// Returns the prime factors of a composite number
function primeFactorization(compositeNumber) {
  let factors = [];
  let remainder = compositeNumber;
  for (let i = 2; i < compositeNumber; i++) {
    if (compositeNumber % 2 === 0) {
      factors.push(2);
      compositeNumber = compositeNumber / 2;
    } else if (compositeNumber % 3 === 0) {
      factors.push(3);
      compositeNumber = compositeNumber / 3;
    }  else if (compositeNumber > 5 && compositeNumber % 5 === 0) {
      factors.push(5);
      compositeNumber = compositeNumber / 5;
    }
  };
  remainder = compositeNumber !== 1 ? compositeNumber : 0;
  factors.push(remainder);
  return factors;
};

const number = primeFactorization(29);
console.log(number)

// Returns all the factors that make up a composite number
// Takes an array of prime factors

function factorFinder(primeFactors) {
  let factors = [1];
  let total = primeFactors[0];
  let rest = 1;
  factors.push(total);
  if (primeFactors.length < 2) {  
    for (let i = 1; i < primeFactors.length; i++) {
      total *= primeFactors[i];
      factors.push(total);
    }
  } else {
    for (let i = 1; i < primeFactors.length; i++) {
        total *= primeFactors[i];
        factors.push(total);
      }
    for (let i = primeFactors.length - 1; i > 0; i--) {
      rest *= primeFactors[i]
      factors.push(rest);
    }
  }
  
  factors.sort(function(a, b) {
    return a - b;
  });
  
  return factors;
}

console.log(factorFinder(number))

*/