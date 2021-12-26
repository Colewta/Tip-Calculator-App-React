import React, { useState } from 'react';
import iconPerson from '../../images/icon-person.svg';
import { billCalcValues } from '../../App';
import { Container, Image, Input, Text } from '../../StylePatterns';
import { finalVerification } from '../../helper';

function NumberOfPeople(){
    const [people, setPeople] = useState(0);

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
                            setPeople(Number(event.target.value));
                        };
                        finalVerification(billCalcValues);
                    }}
                    onBlur={() => {
                        billCalcValues.numberOfPeople = people;
                    }}
                />
            </Container>
        </React.Fragment>
    );
};

export default NumberOfPeople;