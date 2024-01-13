import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../../features/language/languageSlice";
import globe from "../../images/icons/globe.svg";
import globeRed from "../../images/icons/globeRed.svg";

interface RootState {
  language: {
    value: string;
  };
}

export default function LanguageDropDown() {
  const [langPopup, setLangPopup] = useState(false);
  const [langHover, setLangHover] = useState(false);

  const [langList, setLangList] = useState([
    { lang: "en", text: "English", selected: true },
    { lang: "es", text: "Español", selected: false },
  ]);

  function getSelected(lang: string) {
    setLangList(
      langList.map((language) =>
        lang === language.lang
          ? { ...language, selected: true }
          : { ...language, selected: false }
      )
    );
  }

  function getLangPopup(over: boolean) {
    setLangPopup(over);
  }

  const dispatch = useDispatch();

  return (
    <div
      className=""
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
      <div className="absolute bg-[#fcd783] shadow-xl rounded-lg w-fit h-fit z-10 shadow-xl p-4">
        {langPopup &&
          langList.map((lang) => {
            return (
              <div
                className="cursor-pointer flex flex-row items-center gap-4"
                onClick={() => {
                  getLangPopup(false);
                  dispatch(change(lang.lang));
                  getSelected(lang.lang);
                }}
              >
                <div className="w-5 h-5 rounded-full border-2 border-[#ff6347] flex justify-center items-center">
                  <div
                    className={`w-5 h-5 rounded-full bg-[${
                      lang.selected ? "#ff6347" : "none"
                    }]`}
                  ></div>
                </div>
                <div className="hover:text-[#ff6347]">{lang.text}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
