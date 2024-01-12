import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

interface RootState {
  language: {
    value: string;
  };
}

export default function LanguageDropDown() {
  const [langPopup, setLangPopup] = useState(false);

  const langList = [
    { lang: "en", text: "English" },
    { lang: "es", text: "Español" },
  ];

  function getLangPopup(over: boolean) {
    setLangPopup(over);
  }

  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);

  return (
    <div
      className="hover:bg-[#ff6347]"
      onMouseOver={() => getLangPopup(true)}
      onMouseOut={() => getLangPopup(false)}
    >
      <div
        className="w-12 h-12 flex justify-center items-center"
      >
        <FontAwesomeIcon
          icon={faGlobe}
          className="h-6 leading-6 cursor-pointer hover:text-[#343434]"
        />
      </div>
      <div className="absolute h-16 z-10 bg-yellow">
        {langPopup &&
          langList.map((lang) => {
            return <div className="cursor-pointer bg-white">
                <div className="w-6 h-6 bg-red">
                  <div className="w-2 h-2 rounded-full bg-red"></div>
                </div>
                <div>{lang.text}</div>
            </div>;
          })}
      </div>
    </div>
  );
}
