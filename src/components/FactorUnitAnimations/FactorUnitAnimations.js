import React from "react";
import { DotPicture, DotHolder, Dot } from "./FactorUnitAnimations.styles";
import { CardHolder } from './../CardDetail/CardDetail.styles';

export default function FactorUnitAnimations({ unitNumber, button, value }) {
  const cups = Array.apply(null, Array(unitNumber / value)).map(
    function () {}
  );
  const beadsPerCup = unitNumber / value;
  const beads = Array.apply(null, Array(unitNumber / beadsPerCup)).map(
    function () {}
  );

  console.log(value)

  return (
    <DotPicture>
      {cups.map((el, index) => {
        return (
          <div className={value > 5 ? "smallNumber" : "bigNumber"} key={index}>
            {beads.map((el2, index2) => {
              return (
                <Dot key={index2}></Dot>
              )
            })}
          </div>
        );
      })}
    </DotPicture>
  );
}
