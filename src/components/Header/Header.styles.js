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

  .titles {
    font-size: 2.5rem;
    color: #3c3f4a;
    transform: skew(-5deg, -5deg) rotate(5deg);
    -webkit-transform: skew(-5deg, -5deg) rotate(5deg);
    transform: skew(-5deg, -5deg) rotate(5deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    text-shadow: 1px 1px #E1DFDB,
                2px 2px #E1DFDB,
                3px 3px #120600,
                4px 4px #120600,
                5px 5px #E1DFDB,
                6px 6px #E1DFDB,
                7px 7px #120600,
                8px 8px #120600,
                9px 9px #E1DFDB,
                10px 10px #E1DFDB,
                11px 11px 15px rgba(0, 0, 0, 0.5);
   }

  .link-navBar {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
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
