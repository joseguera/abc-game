import styled from "styled-components";

export const FrameHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FrameRow = styled.div`
    display: flex; 
    width: 100%; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center;
    .top-row {
        width: 20%; 
        height: 59.2px;
        border: 2px solid black; 
        border-bottom: 1px;
    }
    .top-cells { 
        border-right: 1px; 
        border-bottom: 2px;

    }
    .lower-row {
        width: 20%;
        height: 59.2px; 
        border: 2px solid black;
    }
    .bottom-cells { 
        border-right: 1px;
    }
`;

export const FrameCell = styled.div`
    width: 20%; 
    height: 59.2px;
    border: 2px solid black; 
    border-right: 1px; 
    border-bottom: 2px;
`;

export const LastCell = styled.div`
    
`;