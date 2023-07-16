import React from 'react';
import { CardDisplayToggle } from "components";
import { HeaderHolder, PageTitle } from './PageHeader.styles';

export default function PageHeader({ pageTitle, list, category }) {
  return (
    <HeaderHolder>
        <PageTitle>{pageTitle}</PageTitle>
        {/* <CardDisplayToggle list={list} category={category} /> */}
    </HeaderHolder>
  )
}
