import React from "react";
import { ButtonList } from 'components';

export default function Science({ animals }) {
  return <ButtonList list={animals} category="science" />;
}
