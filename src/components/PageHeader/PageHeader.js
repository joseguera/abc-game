import React from 'react';
import { CardDisplayToggle } from "components";
import { HeaderHolder, PageTitle } from './PageHeader.styles';

export default function PageHeader({ pageTitle }) {
  return (
    <HeaderHolder>
        <PageTitle>{pageTitle}</PageTitle>
        <CardDisplayToggle />
    </HeaderHolder>
  )
}
