import styled from "styled-components";

export const MenuHolder = styled.div`
  .show {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fcd783;
    width: 200px;
    height: 300px;
    text-align: center;
    border: 1px solid #ff6347;
    border-radius: 5px;
    cursor: pointer;
    z-index: 10;
  }
  .hide {
    display: none;
  }
`;

export const MenuItem = styled.div`
    line-height: 45px;
    font-size: 36px;
    cursor: pointer;
    :hover {
      color: #ff6347;
    }
`;
