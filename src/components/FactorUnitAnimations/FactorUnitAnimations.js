import React from "react";
import { dotOrganizer } from "../../utils/utils.js";
import { TenFrame } from "components";
import {
  DotPicture,
  UnitGroups,
  UnitHolder,
  UnitImage,
} from "./FactorUnitAnimations.styles";

export default function FactorUnitAnimations({ unitNumber, value, image }) {
  // const cups = Array.apply(null, Array(unitNumber / value)).map(function () {});

  // const dotArray = dotOrganizer(value);

  // const dots = dotArray.map((dot) => {
  //   return Array.apply(null, Array(dot)).map(function () {});
  // });

  function unitAmount() {
    let frames = 0;
    if (unitNumber <= 10) {
      frames = 1;
    }
    if (unitNumber > 10 && unitNumber <= 20) {
      frames = 2;
    }
    if (unitNumber > 20 && unitNumber <= 30) {
      frames = 3;
    }
    return frames;
  }

  const frameQuantity = unitAmount();

  const frames = Array.apply(null, Array(frameQuantity)).map(function () {});

  return (
    <DotPicture>


    {frames.map((frame, idx) => {
      return <TenFrame key={idx} unitNumber={unitNumber} />
    })}

      {/* {cups.map((el, index) => {
        return (
          <UnitGroups key={index}>
            {
              dots.map((dot, index) => {
                return (
                  <UnitHolder key={index}>
                    {dot.map((d) => {
                      return <UnitImage key={d} src={image} unit={unitNumber} size={unitSize()} />;
                    })}
                  </UnitHolder>
                );
              })
            }
          </UnitGroups>
        )
      })} */}
    </DotPicture>
  );
}
