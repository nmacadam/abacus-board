class AbacusMath {
    average (numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++){
            sum += numbers[i];
        }
        return (sum / numbers.length) || 0; // returns 0 if the value in ( ) evaluates to a falsy value, (i.e. NaN)
    }
}

export default AbacusMath;