const palindromes = function (string) {
    const lowerCaseString = string.toLowerCase();
    const illegalChars = ['!', ',', '.', ' '];
    // Break string into array
    const array = lowerCaseString.split("");
    // remove non-letter characters (! , . etc) 
    const filteredArray = array.filter(x => !illegalChars.includes(x));
    // combine and assign to var
    const originalArray = filteredArray.join('');
    // then invert and combine to compare
    const inverseArray = filteredArray.reverse();
    const inverseCombined = inverseArray.join('');
    // if equal true, else false
    if (originalArray === inverseCombined) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
