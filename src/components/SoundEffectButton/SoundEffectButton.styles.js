import styled from "styled-components";

export const Icon = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #2f4f4f;
  display: flex;
  align-items: center;
  &:hover {
    color: #4d8080 !important;
  }
`;

export const IconDisabled = styled.div`
  font-size: 27px;
  cursor: not-allowed;
  color: #8fbcbc;
  display: flex;
  align-items: center;
`;