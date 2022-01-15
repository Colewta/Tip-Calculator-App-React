import React from 'react';
import iconPerson from '../../images/icon-person.svg';
import { Container, Image, Input, Text } from '../../StylePatterns';
import { finalVerification } from '../../helper';
import { billCalcValues } from '../Total/Total';

function NumberOfPeople(){
    return(
        <React.Fragment>
            <Text>Number of People</Text>

            <Container>
                <Image src={iconPerson} alt="Símbolo de usuário" />
                <Input 
                    type="number" 
                    min="0"
                    placeholder="0" 
                    onChange={event => {
                        if(event.target.value < 0){
                            event.target.value = 0;
                        } else{
                            billCalcValues.numberOfPeople = Number(event.target.value);
                            finalVerification(billCalcValues);
                        };
                    }}
                />
            </Container>
        </React.Fragment>
    );
};

export default NumberOfPeople;