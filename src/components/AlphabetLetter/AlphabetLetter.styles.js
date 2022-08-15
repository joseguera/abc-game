import styled from "styled-components";

export const StyledLetter = styled.div`
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 26px;
    border: 1px solid #3D674C /*Spring Leaves*/;
    border-radius: 7.5px;
    transition: all 0.5s ease-out;
    color: #3D674C /*Spring Leaves*/;
    box-shadow: -5px 5px #D54A0A /*Tia Maria*/;
    background-color: #E3DAC9;
    &:hover, &:focus {
        cursor: pointer;
        font-size: 24px;
        border: 1px solid #558F69;
        color: #558F69;
        font-size: 30px;
        font-weight: bold;
    }
`;
