import React from 'react';
import dollar from '../../images/icon-dollar.svg';
import { Container, Image, Input, Text } from '../../StylePatterns';
import { finalVerification } from '../../helper';
import { billCalcValues } from '../Total/Total';

function Bill(){
    return(
        <React.Fragment>
            <Text>Bill</Text>

            <Container>
                <Image src={dollar} alt="Nota de dólar" />
                
                <Input 
                    type="number" 
                    min="0"
                    placeholder="0" 
                    onChange={event => {
                        if(event.target.value < 0){
                            event.target.value = 0;
                        } else{
                            billCalcValues.bill = Number(event.target.value);
                            finalVerification(billCalcValues);
                        };
                    }}
                />
            </Container>
        </React.Fragment>  
    );
};

export default Bill;