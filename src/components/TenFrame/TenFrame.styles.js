import styled from "styled-components";

export const FrameRow = styled.div`
    display: flex; 
    width: 100%; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center;
    .frame {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top-row {
        aspect-ratio : 1 / 1;
        width: 20%; 
        border: 2px solid black; 
        border-bottom: 1px;
    }
    .top-cells { 
        border-right: 1px; 
        border-bottom: 2px;

    }
    .lower-row {
        aspect-ratio : 1 / 1;
        width: 20%;
        border: 2px solid black;
    }
    .bottom-cells { 
        border-right: 1px;
        border-bottom: 2px solid black;
    }
`;