import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/language/languageSlice";

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

  const newLang = (language !== 'en') ? 'en' : 'es';

  return (
    <div 
      className='w-10/12 lg:w-3/5 flex justify-between text-4xl items-center gap-2.5 py-8'
    >
        <div className="">{pageTitle}</div>
        <button className='hover:cursor-pointer' onClick={() => dispatch(change(newLang))}>{language.toUpperCase()}</button>
    </div>
  )
}

export default Header;