import React from "react";
import { Button, Header } from "components";
import { ListItem } from "zebraAPI";


interface ButtonListProps {
  category: string;
  list: ListItem[];
};

const ButtonList: React.FC<ButtonListProps> = ({ category, list }) => {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="flex flex-col items-center">
      <Header pageTitle={capitalized} category={category} />
      <div className="w-11/12 flex flex-row flex-wrap gap-6 items-center justify-between">
        {list.map((item) => {
          return (
            <div className="flex flex-row" key={item.id}>
              <Button item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonList;
