import React from 'react';
import styled from 'styled-components';
import { darkerGrayishCyan, strongCyan, white } from '../../variaveis';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding: 0 1rem;
`;

const Title = styled.h3`
    color: ${white};

    @media(min-width: 768px){
        font-size: 2rem;
        
    }
`;

const SubTitle = styled.p`
    color: ${darkerGrayishCyan};
    font-weight: 700;

    @media(min-width: 768px){
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
    }
`;

const Total = styled.h2`
    color: ${strongCyan};
    font-size: 2.3rem;

    @media(min-width: 768px){
        font-size: 3rem;
    }
`;

function SubContainer(props){
    return(
        <Container>
            <div>
                <Title>{props.titulo}</Title>
                <SubTitle>{props.subtitulo}</SubTitle>
            </div>

            <Total>{`$${props.valor}`}</Total>
        </Container>
    );
};

export default SubContainer;