import React, { useState } from "react";
import { LanguageList } from "components";
import globe from "../../images/icons/globe.svg";
import globeRed from "../../images/icons/globeRed.svg";

export default function LanguageDropDown() {
  const [langPopup, setLangPopup] = useState(false);

  function getLangPopup(over: boolean) {
    setLangPopup(over);
  }

  return (
    <div
      className="relative flex flex-col justify-center items-center"
      onMouseOver={() => getLangPopup(true)}
      onMouseOut={() => getLangPopup(false)}
    >
      <div className="w-12 h-12 flex justify-center items-center">
        <img
          src={langPopup ? globeRed : globe}
          className="h-6 leading-6 cursor-pointer"
          alt="language icon"
        />
      </div>
      {langPopup && <LanguageList getLangPopup={getLangPopup} />}
    </div>
  );
}
