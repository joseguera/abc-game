import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9;
  animation: 1s ease-out 0s 1 normal none running grDYJ;
  cursor: auto;
`;

export const MenuHolder = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 87px;
  z-index: 10;
  .show {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fcd783;
    width: 209px;
    height: 250px;
    text-align: center;
    border: 1px solid #ff6347;
    border-radius: 5px;
    cursor: pointer;
    padding: 15px 10px;
  }
`;

export const MenuItem = styled.div`
  line-height: 45px;
  font-size: 36px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    color: #ff6347;
  }
`;
