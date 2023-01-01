import styled from "styled-components";

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
  .name {
    font-size: 42px;
    align-self: center;
    line-height: 61px;
    height: 62px;
    margin-bottom: 0px;
    margin-top: 0px;
    text-align: center;
    width: 185px;
    line-height: 35px;
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
