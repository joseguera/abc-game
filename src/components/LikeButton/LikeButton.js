import React from "react";
import { useSelector } from "react-redux";
import {
  IconDisabled,
  IconHeartLiked,
  IconHeartNotLiked,
} from "./LikeButton.styles";
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
      <IconHeartLiked onClick={() => handleLikeHeart(id, category, props.list)}>
        <FontAwesomeIcon icon={faHeart} />
      </IconHeartLiked>
    ) : (
      <IconHeartNotLiked
        onClick={() => handleLikeHeart(id, category, props.list)}
      >
        <FontAwesomeIcon icon={faHeart} />
      </IconHeartNotLiked>
    )
  ) : (
    <IconDisabled>
      <FontAwesomeIcon icon={faHeart} />
    </IconDisabled>
  );
}
