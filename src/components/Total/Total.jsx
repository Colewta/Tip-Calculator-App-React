import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../StylePatterns';
import { veryDarkCyan } from '../../variaveis';
import SubContainer from './SubContainer';

const Container = styled.div`
    background-color: ${veryDarkCyan};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 3rem auto 10px;
    padding: 2rem 0 1rem;

    @media(min-width: 768px){
        height: 35vh;
    }

    @media(min-width: 1024px){
        height: 30vh;
    }

    @media(min-width: 1200px){
        height: 45vh;
    }
`;

const ButtonSubmit = styled(Button)`
    align-self: center;
    align-items: center;
    display: flex;
    margin: 3rem auto 0;
    padding: 0 .5rem;
    width: auto;

    @media(min-width: 768px){
        width: 100%;
    }
`;

export let finalValues = {
    tipPerson: 0,
    totalPerson: 0
};

function Total({props}){
    const info = (titulo, subtitulo, valor) => {
        return{
            titulo: titulo,
            subtitulo: subtitulo,
            valor: valor
        };
    };

    const totalTip = (props) => {
        return finalValues.tipPerson = ((props.bill * props.tip) / props.numberOfPeople).toFixed(2);
    };

    const totalCalc = (props) => {
        return finalValues.totalPerson = ((props.bill + (props.bill * props.tip)) / props.numberOfPeople).toFixed(2);
    };

    const [change, setChange] = useState(0);

    return(
        <React.Fragment>
            <ButtonSubmit onClick={() => {
                    totalTip(props);
                    totalCalc(props);
                    setChange(change + 1);
                }}>Submit Account</ButtonSubmit>

            <Container>
                <SubContainer {...info('Tip Amount', '/ person', finalValues.tipPerson)} />
                <SubContainer {...info('Total', '/ person', finalValues.totalPerson)} />

                <Button onClick={() => window.location.reload()}>Reset</Button>
            </Container>
        </React.Fragment>
        
    );
};

export default Total;