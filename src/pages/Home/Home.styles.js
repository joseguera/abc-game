import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ButtonMatrix = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;


  /////////////////////////
  ///// BUTTON STYLES /////
  ///////////////////////// 

  .btn-3d-1 {
    position: relative;
    background: #FF6347;
    border: none;
    color: white;
    text-align: center;
    padding: 15px 24px;
    font-size: 1.4rem;
    box-shadow: -6px 6px 0 hsl(16, 100%, 30%);
    outline: none;
  }

  /* When you hover on the button */

  .btn-3d-1:hover {
    background: hsl(16, 100%, 45%);
  }

  .btn-3d-1:active {
    background: hsl(16, 100%, 40%);
    top: 3px;
    left: -3px;
    box-shadow: -3px 3px 0 hsl(16, 100%, 30%);
  }

  /* Adding pseudo element to connect the button's corners */

  .btn-3d-1::before {
    position: absolute;
    display: block;
    content: "";
    height: 0;
    width: 0;

    border: 6px solid transparent;
    border-right: 6px solid hsl(16, 100%, 30%);
    border-left-width: 0px;
    background: none;
    top: 0;
    left: -6px;
  }

  .btn-3d-1::after {
    position: absolute;
    display: block;
    content: "";
    height: 0;
    width: 0;

    border: 6px solid transparent;
    border-top: 6px solid hsl(16, 100%, 30%);
    border-bottom-width: 0px;
    background: none;
    bottom: -5.5px;
    right: 0;
  }

  /* When you click on the button */

  .btn-3d-1:active::before {
    border: 3px solid transparent;
    border-right: 3px solid hsl(16, 100%, 30%);
    border-left-width: 0px;
    top: 0;
    left: -2.75px;
  }

  .btn-3d-1:active::after {
    border: 2.75px solid transparent;
    border-top: 3px solid hsl(16, 100%, 30%);
    border-bottom-width: 0px;
    bottom: -2.75px;
    right: 0;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
`;
