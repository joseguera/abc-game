import styled from "styled-components";

export const CardHolder = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardLetter = styled.div`
  background-color: cornsilk;
  /* background-image: url("https://res.cloudinary.com/djqxogkfw/image/upload/v1660868115/Cory-Images/game_canvas_rvxiva.png"); */
  border: 1px solid #ff6347;
  width: 295px;
  height: 500px;
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
  justify-content: flex-end;
`;

export const XCloser = styled.div`
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
  width: 290px;
  height: 290px;
  padding-bottom: 15px;
`;

export const NameHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const AnimalUtils = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: stretch;
  width: 295px;
`;

export const AnimalNameTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 15px;
`;

export const AnimalName = styled.div`
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
