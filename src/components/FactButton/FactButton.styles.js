import styled from "styled-components";

export const Icon = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #2f4f4f;
  display: flex;
  align-items: center;
  &:hover {
    color: #FC6A03;
  }
`;

export const IconDisabled = styled.div`
  font-size: 27px;
  cursor: not-allowed;
  color: #2F4F4F;
  display: flex;
  align-items: center;
  &:hover {
    color: #8D4004;
  }
`;