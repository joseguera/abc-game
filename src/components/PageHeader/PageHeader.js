import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../features/language/languageSlice";
import { CardDisplayToggle } from "components";
import { HeaderHolder, PageTitle } from './PageHeader.styles';

export default function PageHeader({ pageTitle, list, category }) {
  const [currLang, setCurrLang] = useState('EN');
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.value);

  const newLang = (language !== 'eng') ? 'eng' : 'spa';

  return (
    <HeaderHolder>
        <PageTitle>{pageTitle}</PageTitle>
        {/* <CardDisplayToggle list={list} category={category} /> */}
        <button className='hover:cursor-pointer' onClick={() => dispatch(change(newLang))}>{language}</button>
    </HeaderHolder>
  )
}
