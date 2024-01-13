import React from 'react';
import { LanguageDropDown } from 'components';

interface HeaderProps {
  pageTitle: string;
};
const Header: React.FC<HeaderProps> = ({ pageTitle }) => {

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