import React from "react";
import { Button, Header } from "components";

interface ListItem {
    id: string;
    value: string;
    clicked: boolean;
    image: string;
    name: {
      en: {
        text: string;
        audio: string;
      };
      es: {
        text: string;
        audio: string;
      };
    };
    tiles: {
      en: string[];
      es: string[];
    };
    syllables: {
      en: {
        text: string[];
        audio: Record<string, string>;
      };
      es: {
        text: string[];
        audio: Record<string, string>;
      };
    };
    soundEffect: string[];
    funFacts: string[];
    isLiked: boolean;
    category: string;
    background: string;
};

interface ButtonListProps {
  category: string;
  list: ListItem[];
};

const ButtonList: React.FC<ButtonListProps> = ({ category, list }) => {
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="flex flex-col items-center">
      <Header pageTitle={capitalized} category={category} />
      <div className="flex flex-row flex-wrap gap-6 items-center justify-center">
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
