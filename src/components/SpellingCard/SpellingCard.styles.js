import styled from "styled-components";

export const SpellingCardHolder = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 295px;
justify-content: center;
`;

export const Icon = styled.div`
  font-size: 27px;
  cursor: pointer;
  color: #2f4f4f;
  display: flex;
  align-items: center;
  .spell-close-icon {
    font-size: 42px;
    height: 42px;
  }
  &:hover {
    color: #4d8080 !important;
  }
`;
