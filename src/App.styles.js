import styled from "styled-components";

export const MainApp = styled.div`
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px 0px;
  .styled-link {
    text-decoration: none;
  }
  .styled-link:hover {
    color: blue;
  }
  .styled-link:visited, styled-link:active {
    color: inherit;
  }
`;
