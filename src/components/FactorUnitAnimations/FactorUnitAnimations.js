import React from "react";
import apple from '../../images/numbers/apple.png';
import { dotOrganizer } from "../../utils/utils.js"
import { DotPicture, UnitImage, DotHolder, Dot } from "./FactorUnitAnimations.styles";

export default function FactorUnitAnimations({ unitNumber, button, value }) {
  const cups = Array.apply(null, Array(unitNumber / value)).map(function () {});
  const beadsPerCup = unitNumber / value;
  const beads = Array.apply(null, Array(unitNumber / beadsPerCup)).map(
    function () {}
  );

  const dotArray = dotOrganizer(value);


  return (
    <DotPicture>
      {cups.map((el, index) => {
        return (
          <div className={value > 5 ? "smallNumber" : "bigNumber"} key={index}>
            {beads.map((el2, index2) => {
              // return <Dot key={index2}></Dot>;
              return <UnitImage key={index2} src={apple} />
            })}
          </div>
        );
      })}
    </DotPicture>
  );
}
