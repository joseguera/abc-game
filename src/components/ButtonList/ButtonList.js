import React from "react";
import { Button, PageHeader } from "components";

export default function ButtonList({ list, category }) {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="flex flex-col items-center">
      <PageHeader pageTitle={capitalized} list={list} category={category} />
      <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
        {list.map((item) => {
          return (
            <div className="flex flex-row" key={item.id}>
              {/* <ButtonRow key={item._id}> */}
              <Button category={category} item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
