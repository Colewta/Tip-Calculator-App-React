import React, { useState } from 'react';
import dollar from '../../images/icon-dollar.svg';
import { billCalcValues } from '../../App';
import { Container, Image, Input, Text } from '../../StylePatterns';
import { finalVerification } from '../../helper';

function Bill(){
    const [bill, setBill] = useState(0);

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
                            setBill(Number(event.target.value));
                        };
                        finalVerification(billCalcValues);
                    }}
                    onBlur={() => {
                        billCalcValues.bill = bill;
                    }}
                />
            </Container>
        </React.Fragment>  
    );
};

export default Bill;