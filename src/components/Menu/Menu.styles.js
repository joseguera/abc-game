import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuHolder = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: 0px;
  z-index: 10;
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
