import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { Toggler, SelectedIcon, Icon } from "./CardDisplayToggle.styles";

export default function CardDisplayToggle() {
  const [selected, setSelected] = useState(true);
  const setToggle = () => {
    setSelected(!selected);
  };
  return (
    <Toggler>
      {console.log(selected)}
      {selected ? (
        <>
          <SelectedIcon onClick={() => setToggle()}>
            <FontAwesomeIcon style={{ margin: "0 auto" }} icon={faTableCells} />
          </SelectedIcon>
          <Icon onClick={() => setToggle()}>
            <FontAwesomeIcon icon={faFileExport} />
          </Icon>
        </>
      ) : (
        <>
          <Icon onClick={() => setToggle()}>
            <FontAwesomeIcon icon={faTableCells} />
          </Icon>
          <SelectedIcon onClick={() => setToggle()}>
            <FontAwesomeIcon icon={faFileExport} />
          </SelectedIcon>
        </>
      )}
    </Toggler>
  );
}
