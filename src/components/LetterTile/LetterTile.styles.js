import styled from "styled-components";

export const Tile = styled.div`
  width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 36px;
  text-align: center;
  border: 1px solid #000000;
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
  border: none !important;
`;
