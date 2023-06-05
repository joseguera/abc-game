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

  console.log({value});
  console.log(unitNumber);


  const dotArray = dotOrganizer(value);

  const dots = dotArray.map((dot) => {
    return Array.apply(null, Array(dot)).map(function () {});
  });

  return (
    <DotPicture>
      {cups.map((el, index) => {
        return (
          <UnitGroups key={index}>
            {
              dots.map((dot, index) => {
                return (
                  <UnitHolder key={index}>
                    {dot.map((d) => {
                      return <UnitImage key={d} src={apple} unit={unitNumber} />;
                    })}
                  </UnitHolder>
                );
              })
            }
          </UnitGroups>
        )
      })}
    </DotPicture>
  );
}
