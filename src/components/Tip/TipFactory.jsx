import React from 'react';
import { billCalcValues } from '../../App';
import { SelectTip } from '../../StylePatterns';

function TipFactory({props}){
    return(
        <React.Fragment>
            {
                props.map((object, index) => {
                    return(
                        <SelectTip 
                            key={index}
                            name={object.name}
                            onClick={event => {
                                billCalcValues.tip = (event.target.name / 100);
                            }}
                        >
                        {object.value}</SelectTip>
                    );    
                })
            }
        </React.Fragment>
    );
};

export default TipFactory;