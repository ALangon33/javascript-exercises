const sumAll = function (a, b) {

    // Create output variable
    let output = 0;
    // Create array for generation
    const array = [];

    // if large num first reverse while loop
    if (a < 0 || b < 0 || typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'ERROR';
    } else if (a < b) {
        // Generate array to sum from 
        while (a <= b) {
            array.push(b);
            b--;
        };
    } else {
        while (a >= b) {
            array.push(b);
            b++;
        };
    };
    // for each in array sum
    const outputSum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        output
    );
    return outputSum;
};

// Do not edit below this line
module.exports = sumAll;
