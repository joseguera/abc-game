import styled from "styled-components";

export const StyledLetter = styled.div`
    display: flex;
    flex-direction: column;
    width: 90px;
    height: 90px;
    font-size: 30px;
    border: 1px solid #3D674C /*Spring Leaves*/;
    border-radius: 7.5px;
    transition: all 0.5s ease-out;
    color: #3D674C /*Spring Leaves*/;
    box-shadow: -5px 5px #D54A0A /*Tia Maria*/;
    background-color: #E3DAC9;
    padding: 5px;
    &:hover, &:focus {
        cursor: pointer;
        box-shadow: -5px 5px #558F69;
        color: #558F69;
        font-size: 30px;
    }
`;

export const ButtonHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    .heart-icon {
        width: 15px;
        height: 15px;
    }
`;
export const Letter = styled.div`
    width: 30px;
    height: 30px;
    line-height: 30px;
`;
export const Icon = styled.div`
    width: 15px;
    height: 15px;
    line-height: 7.5px;
`;

export const IconHolder = styled.div`
    display: flex;
    align-items: center;
    width: 60px;
    height: 60px;
    align-self: flex-end;
    justify-content: center;
    .horizontal {
        width: 100%;
    }
    .vertical {
        height: 100%;
    }
`;

export const AnimalIcon = styled.img`

`;
