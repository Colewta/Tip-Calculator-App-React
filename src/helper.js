import { billCalcValues, totalCalc } from "./components/Total/Total";

export const selectTip = [
    {value: '5%', name: '5'},
    {value: '10%', name: '10'},
    {value: '15%', name: '15'},
    {value: '25%', name: '25'},
    {value: '50%', name: '50'}
];

function verifyObject(object){
    for(let i in object){
        if(!object[i]) return false;
    };
};

export function finalVerification(props){
    if(verifyObject(billCalcValues) == ''){
        return;
    } else{
        totalCalc(props);
    };
};