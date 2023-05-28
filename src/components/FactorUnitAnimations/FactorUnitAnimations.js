import React from "react";
import apple from '../../images/numbers/apple.png';
import { dotOrganizer } from "../../utils/utils.js"
import { DotPicture, UnitImage, UnitHolder, Dot } from "./FactorUnitAnimations.styles";

export default function FactorUnitAnimations({ unitNumber, button, value }) {
  const cups = Array.apply(null, Array(unitNumber / value)).map(function () {});
  const beadsPerCup = unitNumber / value;
  const beads = Array.apply(null, Array(unitNumber / beadsPerCup)).map(
    function () {}
  );

  const dotArray = dotOrganizer(value);

  console.log(dotArray);

  const dots = dotArray.map(dot => {
    return (
      Array.apply(null, Array(dot)).map(function () {})
    )
  })

  console.log(dots);

  return (
    <DotPicture>
    {cups.map((el, index) => {
      return (
        dots.map((dot, index) => {
          return (
            <UnitHolder>
              {dot.map(d => {
                return <UnitImage src={apple}/>
              })}
            </UnitHolder>
          )
        })
      )
    })}
    </DotPicture>
    // <DotPicture>
    //   {cups.map((el, index) => {
    //     return (
    //       <div className={value > 5 ? "smallNumber" : "bigNumber"} key={index}>
    //         {beads.map((el2, index2) => {
    //           // return <Dot key={index2}></Dot>;
    //           return <UnitImage key={index2} src={apple} />
    //         })}
    //       </div>
    //     );
    //   })}
    // </DotPicture>
  );
}
