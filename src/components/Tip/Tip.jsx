import React from 'react';
import styled from 'styled-components';
import { billCalcValues } from '../../App';
import { finalVerification, selectTip, verifyObject } from '../../helper';
import { Text } from '../../StylePatterns';
import { darkGrayishCyan, lightGrayishCyan } from '../../variaveis';
import TipFactory from './TipFactory';

const CustomizedText = styled(Text)`
    margin-top: 40px;
`;

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
    font-size: 1.7rem;
    font-weight: 700;
    margin-top: 5%;
    padding: 0 1.3rem;
    text-align: center;
    width: 45%;
`;

function Tip(){
    return(
        <React.Fragment>
            <CustomizedText>Select Tip %</CustomizedText>

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