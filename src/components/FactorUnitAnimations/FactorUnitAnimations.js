import React from "react";
import { dotOrganizer } from "../../utils/utils.js";
import {
  DotPicture,
  UnitGroups,
  UnitHolder,
  UnitImage,
} from "./FactorUnitAnimations.styles";

export default function FactorUnitAnimations({ unitNumber, value, image }) {
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
      unit = 2;
    }
    if (unitNumber >= 11 && unitNumber <= 15) {
      unit = 3;
    }
    if (unitNumber >= 16 && unitNumber <= 20) {
      unit = 3;
    }
    if (unitNumber >= 21 && unitNumber <= 25) {
      unit = 4;
    }
    // Images shouldn't be divided by more than 4
    if (unitNumber >= 26 && unitNumber <= 30) {
      unit = 4;
    }

    return unit;
  }

  return (
    <DotPicture>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "60px 60px 60px 60px 60px",
        gridTemplateRows: "60px 60px 60px 60px 60px",
        alignContent: "center",
        justifyItems: "center",
        gap: "1px"
      }}>
        <div style={{ 
          gridColumn: "1",
          gridRow: "1",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          One
        </div>
        <div style={{ 
          gridColumn: "2",
          gridRow: "1",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Two
        </div>
        <div style={{ 
          gridColumn: "3",
          gridRow: "1",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Three
        </div>
        <div style={{ 
          gridColumn: "4",
          gridRow: "1",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Four
        </div>
        <div style={{ 
          gridColumn: "5",
          gridRow: "1",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Five
        </div>
        <div style={{ 
          gridColumn: "1",
          gridRow: "2",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Six
        </div>
        <div style={{ 
          gridColumn: "2",
          gridRow: "2",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Seven
        </div>
        <div style={{ 
          gridColumn: "3",
          gridRow: "2",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Eight
        </div>
        <div style={{ 
          gridColumn: "4",
          gridRow: "2",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Nine
        </div>
        <div style={{ 
          gridColumn: "5",
          gridRow: "2",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px"
        }}>
          Ten
        </div>
      </div>
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
