export let finalValues = {
    tipPerson: 0,
    totalPerson: 0
};

export const totalCalc = (props) => {
    finalValues.tipPerson = ((props.bill * props.tip) / props.numberOfPeople).toFixed(2);

    return finalValues.totalPerson = ((props.bill + (props.bill * props.tip)) / props.numberOfPeople).toFixed(2);
};