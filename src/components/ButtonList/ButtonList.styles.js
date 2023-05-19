import styled from "styled-components";

export const ButtonListHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageHeader = styled.div`
  display: flex;
  font-size: 32px;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  width: 360px;
  
`;

export const PageTitle = styled.div`
  font-size: 32px;
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
