import React from "react";
import { ButtonList } from 'components';

export default function Science(props) {
  return <ButtonList list={props.animals} category="science" />;
}
