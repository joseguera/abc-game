import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function LikeButton({
  handleLike,
  isLiked,
  id,
  category,
  ...props
}) {
  const playing = useSelector((state) => state.playing.value);
  const handleLikeHeart = (id, category, list) => {
    handleLike(id, category, list);
  };

  return playing ? (
    isLiked ? (
      <div
        className="text-lg cursor-pointer text-[#ff6347] hover:text-[#ff9380]" 
        onClick={() => handleLikeHeart(id, category, props.list)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    ) : (
      <div
        className="text-lg cursor-pointer text-[#2f4f4f] hover:text-[#4d8080]"
        onClick={() => handleLikeHeart(id, category, props.list)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </div>
    )
  ) : (
    <div className="text-lg cursor-not-allowed text-[#8fbcbc]">
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
}
