import React from 'react';
import styled from 'styled-components';
import { Button } from '../../StylePatterns';
import { veryDarkCyan } from '../../variaveis';
import SubContainer from './SubContainer';
import { finalValues } from './totalCalcs';

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

function Total(){
    const info = (titulo, subtitulo, valor) => {
        return{
            titulo: titulo,
            subtitulo: subtitulo,
            valor: valor
        };
    };

    return(
        <React.Fragment>
            <Container>
                <SubContainer {...info('Tip Amount', '/ person', finalValues.tipPerson)} />
                <SubContainer {...info('Total', '/ person', finalValues.totalPerson)} />

                <Button onClick={() => window.location.reload()}>Reset</Button>
            </Container>
        </React.Fragment>
    );
};

export default Total;