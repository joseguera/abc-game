import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/language/languageSlice";
import { LanguageDropDown } from 'components';

interface HeaderProps {
  category: string;
  pageTitle: string;
};

interface RootState {
  language: {
    value: string;
  }  
}

const Header: React.FC<HeaderProps> = ({ pageTitle, category }) => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.value);

  return (
    <div 
      className='w-10/12 lg:w-3/5 flex justify-between text-4xl items-center gap-2.5 py-8'
    >
        <div className="">{pageTitle}</div>
        <LanguageDropDown />
    </div>
  )
}

export default Header;