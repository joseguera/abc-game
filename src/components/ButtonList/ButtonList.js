import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components";
import { PageTitle, ButtonMatrix, ButtonRow } from "./ButtonList.styles";

export default function ButtonList({ list, category }) {

  const capitalized =
  category.charAt(0).toUpperCase() + category.slice(1)


  return (
  <>
    <PageTitle>
        {capitalized}
        <FontAwesomeIcon icon={faTableCells} />
        <FontAwesomeIcon icon={faFileExport} />
    </PageTitle>
    <ButtonMatrix>
      {list.map((item) => {
        return (
          <ButtonRow key={item.id}>
          {/* <ButtonRow key={item._id}> */}
            <Button
              category={category}
              item={item}
            />
          </ButtonRow>
        );
      })}
    </ButtonMatrix>
  </>
  );
}
