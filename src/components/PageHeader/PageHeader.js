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
      className='w-10/12 lg:w-3/5 flex justify-between text-4xl items-center gap-2.5 py-8'
    >
        <div className="">{pageTitle}</div>
        {/* <CardDisplayToggle list={list} category={category} /> */}
        <button className='hover:cursor-pointer' onClick={() => dispatch(change(newLang))}>{language.toUpperCase()}</button>
    </div>
  )
}
