import styled from "styled-components";

export const Toggler = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 10px;
  gap: 10px;
  height: 32px;
  width: 75px;
`;

export const Icon = styled.p`
  font-size: 22px;
  color: #3d674c /*Spring Leaves*/;
  &:hover,
  &:focus {
    cursor: pointer;
    color: #558f69;
  }
`;