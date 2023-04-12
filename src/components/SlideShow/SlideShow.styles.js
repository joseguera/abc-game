import styled from "styled-components";

export const ShowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 10px;
  width: 295px;
  color: #2f4f4f;
`;

export const SlideHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  width: 295px;
  color: #2f4f4f;
  .arrow-icon {
    font-size: 27px;
    cursor: pointer;
    :hover {
        color: #4d8080
    }
  }
`;

export const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 250px;
`;

export const Fact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 225px;
`;

export const CloseIcon = styled.div`
  font-size: 36.57px;
  cursor: pointer;
  color: #ff6347;
  display: flex;
  align-items: center;
  &:hover {
    color: #ff7d66 !important;
  }
`;


