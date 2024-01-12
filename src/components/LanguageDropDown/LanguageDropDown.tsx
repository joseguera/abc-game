import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

interface RootState {
    language: {
      value: string;
    }  
}

export default function LanguageDropDown() {

    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language.value);

  return (
    <div>LanguageDropDown</div>
  )
}
