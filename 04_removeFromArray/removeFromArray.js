const removeFromArray = function (array, args) {

    const argSet = Array.from(arguments)
    const subjectArgs = argSet[0];
    const arg = argSet.slice(1);
    return subjectArgs.filter(x => !arg.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
