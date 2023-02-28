import React from "react";
import { Button } from "components";
import { ButtonMatrix, ButtonRow } from "./ButtonList.styles";

export default function ButtonList(props) {
  return (
    <ButtonMatrix>
      {props.list.map((item) => {
        return (
          <ButtonRow key={item.id}>
            <Button
              category={props.category}
              handleOpenClose={props.handleOpenClose}
              item={item}
              handleLike={props.handleLike}
            />
          </ButtonRow>
        );
      })}
    </ButtonMatrix>
  );
}
