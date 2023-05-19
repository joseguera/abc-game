import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableCells, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { Button } from "components";
import {
  PageHeader,
  PageTitle,
  CardDisplayToggle,
  Icon,
  ButtonMatrix,
  ButtonRow,
} from "./ButtonList.styles";

export default function ButtonList({ list, category }) {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <PageHeader>
        <PageTitle>{capitalized}</PageTitle>
        <CardDisplayToggle>
          <Icon>
            <FontAwesomeIcon icon={faTableCells} />
          </Icon>
          <Icon>
            <FontAwesomeIcon icon={faFileExport} />
          </Icon>
        </CardDisplayToggle>
      </PageHeader>
      <ButtonMatrix>
        {list.map((item) => {
          return (
            <ButtonRow key={item.id}>
              {/* <ButtonRow key={item._id}> */}
              <Button category={category} item={item} />
            </ButtonRow>
          );
        })}
      </ButtonMatrix>
    </>
  );
}
