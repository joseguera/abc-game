import styled, { keyframes } from "styled-components";

export const DotPicture = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  gap: 5px;
  padding: 0px 5px 5px 0px;
  justify-content: center;
  align-items: center;
  rotate: 90deg;
`;

export const UnitGroups = styled.div`
  display: flex;
  width: 15px;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const UnitHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 15px;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const example = keyframes`
    0% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
    25% {
      background-color: orange;
      left: 100px;
      top: 100px;
    }
    50% {
      background-color: blue;
      left: 200px;
      top: 200px;
    }
    75% {
      background-color: green;
      left: 0px;
      top: 200px;
    }
    100% {
      background-color: red;
      left: 0px;
      top: 0px;
    }
`;

export const UnitImage = styled.img`
  width: 15px;
  height: 15px;
  rotate: 270deg;
  // animation: ${example} 4s infinite;
`;
