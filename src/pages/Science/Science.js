import React from "react";
import { ButtonList, ClearStorage } from "components";

export default function Science({ animals }) {
  return (
    <>
      <ClearStorage />
      <ButtonList list={animals} category="science" />
    </>
  );
}
