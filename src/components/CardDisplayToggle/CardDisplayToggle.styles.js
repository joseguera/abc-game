import styled from "styled-components";

export const Toggler = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #3d674c;
  border-radius: 6px;
  height: 32px;
  width: 84px;
  transition: all 5s;

`;

export const SelectedIcon = styled.p`
  font-size: 22px;
  width: 40px;
  height: 30px;
  text-align: center;
  color: #fde7b4;
  background-color: #3d674c;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const Icon = styled.p`
  font-size: 22px;
  width: 40px;
  height: 30px;
  text-align: center;
  color: #3d674c;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    cursor: pointer;
    color: #558f69;
  }
`;
