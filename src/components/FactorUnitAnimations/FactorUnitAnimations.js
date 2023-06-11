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

  const dotArray = dotOrganizer(value);

  const dots = dotArray.map((dot) => {
    return Array.apply(null, Array(dot)).map(function () {});
  });

  function unitSize() {
    let unit = 0;
    if (unitNumber > 1 && unitNumber <= 5) {
      unit = 2;
    }
    if (unitNumber >= 6 && unitNumber <= 10) {
      unit = 3;
    }
    if (unitNumber >= 11 && unitNumber <= 15) {
      unit = 4;
    }
    if (unitNumber >= 16 && unitNumber <= 20) {
      unit = 5;
    }
    if (unitNumber >= 21 && unitNumber <= 25) {
      unit = 6;
    }
    if (unitNumber >= 26 && unitNumber <= 30) {
      unit = 7;
    }
  
    return unit;
  };

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
                      return <UnitImage key={d} src={apple} unit={unitNumber} size={unitSize()} />;
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
