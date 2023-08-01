import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {
  styledLink,
  ButtonHeader,
  Letter,
  Icon,
  IconHolder,
  AnimalIcon,
} from "./Button.styles";

// export const styledLink = {
//   textDecoration: "none",
// };

// export const ButtonHeader = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: space-between;
//   .heart-icon {
//     width: 15px;
//     height: 15px;
//   }
// `;
// export const Letter = styled.div`
//   width: 30px;
//   height: 30px;
//   line-height: 30px;
// `;
// export const Icon = styled.div`
//   width: 15px;
//   height: 15px;
//   line-height: 7.5px;
// `;

// export const IconHolder = styled.div`
//   display: flex;
//   align-items: center;
//   width: 60px;
//   height: 60px;
//   align-self: flex-end;
//   justify-content: center;
// `;

// export const AnimalIcon = styled.img`
//   width: 100%;
// `;


export default function Button({ category, item }) {
  return (
    <Link to={`/${category}/${item.id}`} style={styledLink} >
    {/* <Link to={`/${category}/${item.key}`} style={styledLink}> */}
      <div
        className="flex flex-col w-full h-90 text-lg border border-[#3d674c] rounded-lg transition-all ease-out delay-150 text-[#3d674c] drop-shadow-md bg-[#e3dac9] p-1.5 hover:drop-shadow-lg hover:text-xl hover:text-[#558f69] focus:drop-shadow-xl"
      >
        <ButtonHeader>
          <Letter>{item.value}</Letter>
          {item.isLiked && (
            <Icon>
              <FontAwesomeIcon className="heart-icon" icon={faHeart} />
            </Icon>
          )}
        </ButtonHeader>
        <IconHolder>
          <AnimalIcon
            src={item.image}
            alt={item.name}
            // alt={item.name.en}
          />
        </IconHolder>
      </div>
    </Link>
  );
}
