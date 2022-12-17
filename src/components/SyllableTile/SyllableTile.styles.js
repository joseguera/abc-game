import styled from "styled-components";

export const Tile = styled.div`
  height: 40px;
  letter-spacing: 20px;
  padding-left: 20px;
  line-height: 40px;
  font-size: 35px;
  border: 1px solid #ff6347;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    border: 1px solid #0e6e79;
    color: #0e6e79;
  }
`;

export const Dash = styled.div`
  width: 10.65px;
  height: 42px;
  line-height: 42px;
  cursor: auto;
`;
