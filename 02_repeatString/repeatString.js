const repeatString = function (string, number) {
    outputString = '';
    // Creates output Array elements from each numArray element
    if (number < 0) {
        return "ERROR"
    } else {
        for (number; number > 0; --number) {
            outputString += string;
        };
        return outputString;
    };
};

// Do not edit below this line
module.exports = repeatString;

