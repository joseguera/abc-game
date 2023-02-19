import styled from "styled-components";

export const ButtonMatrix = styled.div`
  button,
  input[type="submit"],
  input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export const NavButton = styled.button`
  width: 180px;
  border: 1px solid black !important;
  padding: 30px !important;
  margin: 10px;
  text-align: center;
  height: 90px;
  font-size: 30px;
  border: 1px solid #3d674c /*Spring Leaves*/;
  border-radius: 7.5px;
  transition: all 0.5s ease-out;
  color: #3d674c /*Spring Leaves*/;
  box-shadow: -5px 5px #d54a0a /*Tia Maria*/;
  background-color: #e3dac9;
  padding: 5px;
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: -5px 5px #558f69;
    color: #558f69;
  }
`;
