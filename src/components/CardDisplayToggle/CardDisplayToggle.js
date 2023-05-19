import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { Toggler, Icon } from "./CardDisplayToggle.styles";

export default function CardDisplayToggle() {
  return (
    <Toggler>
      <Icon>
        <FontAwesomeIcon icon={faTableCells} />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={faFileExport} />
      </Icon>
    </Toggler>
  );
}
