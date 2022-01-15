import React from 'react';
import styled from 'styled-components';
import { finalVerification, selectTip } from '../../helper';
import { Text } from '../../StylePatterns';
import { darkGrayishCyan, lightGrayishCyan } from '../../variaveis';
import { billCalcValues } from '../Total/Total';
import TipFactory from './TipFactory';

const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
`;

const CustomTip = styled.input`
    background-color: ${lightGrayishCyan};
    border: none;
    border-radius: 7px;
    color: ${darkGrayishCyan};
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 5%;
    padding: 0 1.3rem;
    text-align: center;
    width: 45%;
`;

function Tip(){
    return(
        <React.Fragment>
            <Text>Select Tip %</Text>

            <Container>
                <TipFactory props={selectTip} />
                <CustomTip 
                    type="text" 
                    placeholder="Custom %" 
                    onChange={event => {
                        billCalcValues.tip = (event.target.value / 100);
                        finalVerification(billCalcValues);
                    }}
                />
            </Container>
        </React.Fragment>
    );
};

export default Tip;