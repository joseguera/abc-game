import React, { useState } from "react";
import globe from "../../images/icons/globe.svg";
import globeRed from "../../images/icons/globeRed.svg";
import LanguageList from "components/LanguageList";

export default function LanguageDropDown() {
  const [langPopup, setLangPopup] = useState(false);
  const [langList, setLangList] = useState([
    { lang: "en", text: "English", selected: true },
    { lang: "es", text: "Español", selected: false },
  ]);
  
  function getLangPopup(over: boolean) {
    setLangPopup(over);
  }

  function getSelected(lang: string) {
    setLangList((prevState) => {
        return prevState.map((language) =>
          lang === language.lang
            ? { ...language, selected: true }
            : { ...language, selected: false }
    )})
  }

  return (
    <div
      className="flex justify-center items-center relative"
      onMouseOver={() => getLangPopup(true)}
      onMouseOut={() => getLangPopup(false)}
    >
      <div className="w-12 h-12 flex justify-center items-center">
        <img
          src={langPopup ? globeRed : globe}
          className="h-6 leading-6 cursor-pointer hover:text-[#343434]"
          alt="language icon"
        />
      </div>
      {langPopup && 
        <LanguageList getLangPopup={getLangPopup} getSelected={getSelected} langList={langList} />
      }
    </div>
  );
}
