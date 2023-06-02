import React from "react";
import apple from "../../images/numbers/apple.png";
import { dotOrganizer } from "../../utils/utils.js";
import {
  DotPicture,
  UnitGroups,
  UnitHolder,
  UnitImage,
} from "./FactorUnitAnimations.styles";

export default function FactorUnitAnimations({ unitNumber, value }) {
  const cups = Array.apply(null, Array(unitNumber / value)).map(function () {});
  const beadsPerCup = unitNumber / value;
  // const beads = Array.apply(null, Array(unitNumber / beadsPerCup)).map(
  //   function () {}
  // );

  const startBeads = value;

  console.log({startBeads});
  console.log({cups});

  const dotArray = dotOrganizer(value);

  const dots = dotArray.map((dot) => {
    return Array.apply(null, Array(dot)).map(function () {});
  });

  const beads = Array.apply(null, Array(startBeads)).map(function () {});

  console.log(beads);

  return (
    <DotPicture>
      {cups.map((el, index) => {
        return value < 3
          ? beads.map((b) => {
              return <UnitImage key={b} src={apple} />;
            })
          : dots.map((dot, index) => {
              return (
                <UnitHolder key={index}>
                  {dot.map((d) => {
                    return <UnitImage key={d} src={apple} />;
                  })}
                </UnitHolder>
              );
            });
      })}
    </DotPicture>
  );
}
