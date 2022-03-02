import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../StylePatterns';
import { veryDarkCyan } from '../../variaveis';
import SubContainer from './SubContainer';

const ButtonHidden = styled.button`
    display: none;
`;

const Container = styled.div`
    background-color: ${veryDarkCyan};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem auto 10px;
    padding: 2rem 0 1rem;

    @media(min-width: 768px){
        height: 90%;
    }
`;

export let billCalcValues = {
    bill: 0,
    numberOfPeople: 0,
    tip: 0
};

let tipPerson = 0, totalPerson = 0;

export const totalCalc = (props) => {
    tipPerson = ((props.bill * props.tip) / props.numberOfPeople).toFixed(2);
    totalPerson = ((props.bill + (props.bill * props.tip)) / props.numberOfPeople).toFixed(2);
};

function Total(){
    let counter = 1;
    const [change, setChange] = useState(0);
    const onBtnClick = () => {
        counter = change + 1;
        setChange(counter);
    };

    const info = (title, subtitle, value) => {
        return{
            title: title,
            subtitle: subtitle,
            value: value
        };
    };

    return(
        <React.Fragment>
            <Container>
                <SubContainer {...info('Tip Amount', '/ person', tipPerson)} />
                <SubContainer {...info('Total', '/ person', totalPerson)} />

                <Button onClick={() => window.location.reload()}>Reset</Button>
                <ButtonHidden className="buttonHidden" onClick={onBtnClick}>Hidden</ButtonHidden>
            </Container>
        </React.Fragment>
    );
};

export default Total;