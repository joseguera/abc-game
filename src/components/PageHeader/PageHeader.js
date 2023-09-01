import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/language/languageSlice";

export default function PageHeader({ pageTitle, list, category }) {
  const [currLang, setCurrLang] = useState('EN');
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);

  const newLang = (language !== 'en') ? 'en' : 'es';

  return (
    <div 
      className='flex justify-between text-4xl items-center gap: 10px pt-8 w-2/5'
    >
        <div className="">{pageTitle}</div>
        {/* <CardDisplayToggle list={list} category={category} /> */}
        <button className='hover:cursor-pointer' onClick={() => dispatch(change(newLang))}>{language.toUpperCase()}</button>
    </div>
  )
}
