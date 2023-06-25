import styled from "styled-components";

export const ButtonListHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
