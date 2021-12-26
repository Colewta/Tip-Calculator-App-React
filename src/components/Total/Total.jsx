import React, { useEffect, useState } from 'react';
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
        height: 35vh;
    }

    @media(min-width: 1024px){
        height: 30vh;
    }

    @media(min-width: 1200px){
        height: 45vh;
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

    const [change, setChange] = useState(finalValues.tipPerson);

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