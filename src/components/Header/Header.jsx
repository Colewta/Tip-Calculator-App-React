import React from 'react';
import styled from 'styled-components';
import { lighterGrayishCyan, veryDarkCyan } from '../../variaveis';

export const StyledHeader = styled.header`
    align-items: center;
    background-color: ${lighterGrayishCyan};
    display: flex;
    height: 10rem;
    justify-content: center;
    width: 100%;
`;

export const MainTitle = styled.h1`
    color: ${veryDarkCyan};
    font-size: 1.875;
    font-weight: 700;
    letter-spacing: 10px;
    text-transform: uppercase;
`;

function Header(){
    return(
        <StyledHeader>
            <MainTitle>Splitter</MainTitle>
        </StyledHeader>
    );
};

export default Header;