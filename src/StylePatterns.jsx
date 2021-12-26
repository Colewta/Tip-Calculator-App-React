import styled from 'styled-components';
import { darkGrayishCyan, lighterGrayishCyan, lightGrayishCyan, strongCyan, veryDarkCyan } from './variaveis';

export const Text = styled.h3`
    color: ${darkGrayishCyan};
    margin-top: 30px;
`;

export const Container = styled.div`
    position: relative;
`;

export const Input = styled.input`
    background-color: ${lightGrayishCyan};
    border: none;
    color: ${veryDarkCyan};
    font-size: 1.8rem;
    font-weight: 700;
    height: 3.6rem;
    margin-top: .4375rem;
    padding: 0 1.5rem;
    text-align: right;
    width: 100%;
`;

export const Image = styled.img`
    height: 1.5rem;
    left: 1.3rem;
    position: absolute;
    top: 35%;
    width: auto;
`;

export const SelectTip = styled.button`
    background-color: ${veryDarkCyan};
    border: none;
    border-radius: 7px;
    color: white;
    cursor: pointer;
    font-size: 1.7rem;
    font-weight: 700;
    height: 3.5rem;
    margin-top: 5%;
    width: 45%;

    :focus{
        background-color: ${strongCyan};
        color: ${veryDarkCyan};
    }
`;

export const Button = styled.button`
    background-color: ${strongCyan};
    border: none;
    border-radius: 7px;
    color: ${veryDarkCyan};
    cursor: pointer;
    font-size: 1.7rem;
    font-weight: 700;
    height: 3.2rem;
    margin: 1rem auto 0;
    text-transform: uppercase;
    width: 90%;
`;