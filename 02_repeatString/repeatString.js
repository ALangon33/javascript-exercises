const repeatString = function() {

    const stringChoice = "hey";
    let n = 10;
    let outputString = '';

    while (n) {
        outputString += stringChoice;
        n--;
    };
    console.log(outputString);
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
