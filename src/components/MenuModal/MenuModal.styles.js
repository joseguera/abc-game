import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuItem = styled.div`
  display: flex;
  line-height: 45px;
  font-size: 36px;
  cursor: pointer;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :hover {
    color: #ff6347;
  }
`;
