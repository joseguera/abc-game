import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardHolder = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 20px 0;
`;

export const CardLetter = styled.div`
  background-color: #48a5e0;
  border: 10px solid #fff8dc;
  width: 320px;
  height: 710px;
  border-radius: 15px;
  padding: 10px;
`;

export const PlayingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  .horizontal {
    width: 100%;
  }
  .vertical {
    height: 100%;
  }
`;

export const XCloserHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const XCloser = styled.button`
  font-size: 27px;
`;

export const XCloserLink = styled(Link)`
  font-size: 27px;
  color: #000000;
  text-decoration: none;
  &:hover {
    color: #4d8080 !important;
  }
`;

export const UnitHolder = styled.div`
  font-size: 27px;
  color: #2f4f4f;
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
  height: 475px;
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
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
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

export const IconHeartLiked = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #ff6347;
  &:hover {
    color: #ff9380;
  }
`;

export const IconHeartNotLiked = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #2f4f4f;
  &:hover {
    color: #4d8080;
  }
`;
