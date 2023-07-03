import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { Toggler, SelectedIcon, Icon } from "./CardDisplayToggle.styles";

export default function CardDisplayToggle({ list, category }) {
  const [selected, setSelected] = useState(true);
  const setToggle = () => {
    setSelected(!selected);
  };

  return (
    <Toggler>
      {selected ? (
        <>
          <SelectedIcon onClick={() => setToggle()}>
            <FontAwesomeIcon style={{ margin: "0 auto" }} icon={faTableCells} />
          </SelectedIcon>
          <Icon onClick={() => setToggle()}>
            <Link to={`/${category}/${list[0].id}`}>
              <FontAwesomeIcon icon={faFileExport} />
            </Link>
          </Icon>
        </>
      ) : (
        <>
          <Icon onClick={() => setToggle()}>
            <FontAwesomeIcon icon={faTableCells} />
          </Icon>
          <SelectedIcon onClick={() => setToggle()}>
            <Link to={`/${category}/${list[0].id}`}>
              <FontAwesomeIcon icon={faFileExport} />
            </Link>
          </SelectedIcon>
        </>
      )}
    </Toggler>
  );
}
