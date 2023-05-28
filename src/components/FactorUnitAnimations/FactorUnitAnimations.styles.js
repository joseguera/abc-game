import styled, { keyframes } from "styled-components";

export const DotPicture = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px;
  justify-content: center;
  align-items: center;
  .bigNumber {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 20px;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
  .smallNumber {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 200px;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const UnitHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 20px;
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

export const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  animation: ${example} 4s infinite;
  // position: relative;
`;

export const UnitImage = styled.img`
  width: 15px;
  height: 15px;
`;
