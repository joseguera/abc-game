import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../../features/language/languageSlice";

interface LanguageListProps {
  getLangPopup: (option: boolean) => void;
}

const LanguageList: React.FC<LanguageListProps> = ({ getLangPopup }) => {
  const dispatch = useDispatch();

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

  return (
    <div className="absolute top-12 bg-[#fcd783] shadow-xl rounded-lg w-fit h-fit z-10 shadow-xl p-4">
      {langList.map((lang) => {
        return (
          <div
            key={lang.lang}
            className="cursor-pointer flex flex-row items-center gap-4"
            onClick={() => {
              getLangPopup(false);
              dispatch(change(lang.lang));
              getSelected(lang.lang);
            }}
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#ff6347] flex justify-center items-center">
              <div
                className={`w-5 h-5 rounded-full bg-[${lang.selected ? "#ff6347" : "none"}]`}
              ></div>
            </div>
            <div className="text-[24px] hover:text-[#ff6347]">{lang.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LanguageList;
