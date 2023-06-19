const fibonacci = function (n) {
    // Take input value and increment up the
    // Fibonacci sequence until input value is reached
    let oldestValue = 1;
    let currentValue = 1;
    let nextValue = 0;

    if (typeof (n) === 'string') {
        Number(n);
    };

    if (n === 1 || n === 2) {
        return 1;
    } else {
        for (i=2; i<n; i++) {
            nextValue = currentValue + oldestValue;
            oldestValue = currentValue;
            currentValue = nextValue;
        };
    };

    return nextValue;
};

// Do not edit below this line
module.exports = fibonacci;
