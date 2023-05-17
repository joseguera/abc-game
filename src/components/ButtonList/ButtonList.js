import React from "react";
import { Button } from "components";
import { ButtonMatrix, ButtonRow } from "./ButtonList.styles";

export default function ButtonList({ list, category }) {
  return (
    <ButtonMatrix>
      {list.map((item) => {
        return (
          // <ButtonRow key={item.id}>
          <ButtonRow key={item._id}>
            <Button
              category={category}
              item={item}
            />
          </ButtonRow>
        );
      })}
    </ButtonMatrix>
  );
}
