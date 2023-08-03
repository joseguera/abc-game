import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Button({ item }) {
  return (
    <Link to={`/${item.category}/${item.id}`} className="decoration-none" >
    {/* <Link to={`/${category}/${item.key}`} style={styledLink}> */}
      <div
        className="flex flex-col w-24 h-24 text-lg border border-[#3d674c] rounded-lg transition-all ease-out delay-150 text-[#3d674c] drop-shadow-md bg-[#e3dac9] p-1 hover:drop-shadow-lg hover:text-xl hover:text-[#558f69] focus:drop-shadow-xl"
      >
        <div className="flex flex-row items-start justify-between">
          <div className="flex items-start -mt-1 text-2xl">{item.value}</div>
          {item.isLiked && (
            <div className="flex items-start">
              <FontAwesomeIcon className="w-4 h-4" icon={faHeart} />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center self-end w-14 h-14">
          <img
            className="w-full"
            src={item.image}
            alt={item.name}
          />
        </div>
      </div>
    </Link>
  );
}
