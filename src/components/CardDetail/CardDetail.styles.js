import styled from "styled-components";

export const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
`;

export const CardLetter = styled.div`
  background-color: cornsilk;
  /* background-image: url("https://res.cloudinary.com/djqxogkfw/image/upload/v1660868115/Cory-Images/game_canvas_rvxiva.png"); */
  border: 1px solid #ff6347;
  width: 320px;
  height: 550px;
  border-radius: 15px;
  padding: 20px;
`;

export const PlayingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const XCloserHolder = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const XCloser = styled.div`
  cursor: pointer;
  font-size: 27px;
  color: #2f4f4f;
  &:hover {
    color: #4d8080 !important;
  }
`;

export const DestructButton = styled.div`
  cursor: pointer;
  font-size: 27px;
  color: #2f4f4f;
  &:hover {
    color: #4d8080 !important;
  }
`;

export const ImageHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  padding-bottom: 15px;
`;

export const NameHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 192px;
`;

export const Utils = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  width: 320px;
`;

export const NameTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

export const Name = styled.div`
  font-size: 42px;
  align-self: center;
  line-height: 61px;
  height: 62px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const Icon = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #2f4f4f;
  display: flex;
  align-items: center;
  &:hover {
    color: #4d8080 !important;
  }
`;

export const IconHolder = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const IconHeart = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #2f4f4f;
`;
