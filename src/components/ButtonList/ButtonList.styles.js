import styled from "styled-components";

export const PageHeader = styled.div`
  display: flex;
  font-size: 32px;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-left: 32px;
`;

export const PageTitle = styled.div`
  font-size: 32px;
`;

export const CardDisplayToggle = styled.div`
  display: flex;
  flex-direction: row;
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

export const ButtonMatrix = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: space-between;
  gap: 25px;
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 20px;
`;
