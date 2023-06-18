const removeFromArray = function (array, valuesToRemove) {

    // Assign arguments from input to variables
    const args = Array.from(arguments);
    const subjectArray = args[0];
    const removalArray = args.slice(1);

    let removalLen;
    // Get length for loop
    let subjectLen = subjectArray.length;
    if (typeof (removalArray) === 'number') {
        removalLen = 1;
    } else {
        removalLen = removalArray.length;
    }
    const output = [];
    let o = 0;


    for (i = 0; i < subjectLen;) {
        for (n = 0; n < removalLen; n++) {
            if (subjectArray[i] !== removalArray[n]) {
                output[o] = subjectArray[i];
                o++;
                i++
            } else if (subjectArray[i] === removalArray[n]) {
                i++;
            } else {
                i++
            };
        };
    };
    return output;

};

// Do not edit below this line
module.exports = removeFromArray;
