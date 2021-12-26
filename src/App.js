import React from 'react';
import styled from 'styled-components';
import './App.css';
import Bill from './components/Bill/Bill';
import Header from './components/Header/Header';
import { GlobalStyle } from './GlobalStyle';
import Tip from './components/Tip/Tip';
import NumberOfPeople from './components/NumberOfPeople/NumberOfPeople';
import Total from './components/Total/Total';

const Container = styled.div`
  border-radius: 20px;
  margin: 0 auto;
  width: 90%;

  @media(min-width: 768px){
    display: flex;
    justify-content: space-between;
  }
`;

const DivHalf = styled.div`
  @media(min-width: 768px){
    width: 45%;
  }
`;

export let billCalcValues = {
  bill: 0,
  numberOfPeople: 0,
  tip: 0
};

function App(){
  return(
    <React.Fragment>
      <GlobalStyle />
      <Header />

      <Container>
        <DivHalf>
          <Bill props={billCalcValues} />
          <NumberOfPeople props={billCalcValues} />
          <Tip />
        </DivHalf>
        
        <DivHalf>
          <Total props={billCalcValues} />
        </DivHalf>
      </Container>
    </React.Fragment>
  );
}

export default App;