import React from "react";
import { Button, PageHeader } from "components";
import {
  ButtonListHolder,
  ButtonMatrix,
  ButtonRow
} from "./ButtonList.styles";

export default function ButtonList({ list, category }) {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <ButtonListHolder>
      <PageHeader pageTitle={capitalized} />
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
