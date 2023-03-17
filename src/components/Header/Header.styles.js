import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderHolder = styled.div`
    display: flex;
    width: 428px;
    background: #ff6347;
    justify-content: center;
    align-items: center;

  .nav-bar-holder {
    position: fixed;
    left: 0px;
    bottom: 0px;
  }

  .header,
  .nav-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .header {
    flex-direction: column;
    align-items: center;
  }

  .header-title-holder,
  .navBar-title-holder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .header-title-holder {
    gap: 12px;
  }

  .header-item {
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: space-around;
  }

  .header-brand {
    height: 25px;
    line-height: 25px;
    cursor: pointer;
    :hover {
        color: #343434;
    }
  }

  .link-navBar {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

//   .header-brand {
//     pointer: cursor;
//   }
`;

export const SiteTitle = styled.div`
  font-size: 16px;
  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #000000;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
