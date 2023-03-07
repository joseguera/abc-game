import React from "react";
import { DotHolder, Dot } from "./FactorUnitAnimations.styles";

export default function FactorUnitAnimations(props) {
  const loaders = Array.apply(null, Array(props.unitNumber)).map(
    function () {}
  );

  return (
    <DotHolder>
      {loaders.map((el, index) => {
        return <Dot key={index}></Dot>;
      })}
    </DotHolder>
  );
}
