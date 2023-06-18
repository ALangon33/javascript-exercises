const reverseString = function(string) {
    // Check test and use input ^^^ here

    // Set string length to variable
    let strLen = string.length;
    // Create output string
    let output = '';
    // Convert string to array
    const strArray = string.split("");
    // Inverse array
    const reverseArray = strArray.reverse();
    // Reconstruct string
    for (letters of reverseArray) {
        output += letters;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
