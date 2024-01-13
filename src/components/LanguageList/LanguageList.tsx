import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { change } from "../../features/language/languageSlice";

interface LangList {
    lang: string;
    text: string;
    selected: boolean;
}

interface LanguageListProps {
  getLangPopup: (option: boolean) => void;
  getSelected: (lang: string) => void;
  langList: LangList[];
}

const LanguageList: React.FC<LanguageListProps> = ({ getLangPopup, getSelected, langList }) => {
  const dispatch = useDispatch();
  const [langHover, setLangHover] = useState("w-5 h-5");

function getHovered() {
    langList.map(lang => {
        return lang.selected === true ? setLangHover("w-3 h-3") : setLangHover("w-5 h-5"); 
    })
} 

  return (
    <div className="absolute top-12 bg-[#fcd783] shadow-xl rounded-lg w-fit h-fit z-10 shadow-xl p-4">
      {langList.map((lang) => {
        return (
          <div
            key={lang.lang}
            className="cursor-pointer flex flex-row items-center gap-4"
            onClick={() => {
                getSelected(lang.lang);
                dispatch(change(lang.lang));
                getLangPopup(false);
            }}
            onMouseOver={() => getHovered()}
          >
            <div className="w-5 h-5 rounded-full border-2 border-[#ff6347] flex justify-center items-center">
              <div
                className={`${langHover} rounded-full bg-[${lang.selected ? "#ff6347" : "none"}]`}
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
