import React from "react";
import { Button, CardDisplayToggle } from "components";
import {
  ButtonListHolder,
  PageHeader,
  PageTitle,
  ButtonMatrix,
  ButtonRow,
} from "./ButtonList.styles";

export default function ButtonList({ list, category }) {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <ButtonListHolder>
      <PageHeader>
        <PageTitle>{capitalized}</PageTitle>
        <CardDisplayToggle />
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
    </ButtonListHolder>
  );
}
