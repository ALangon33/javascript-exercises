const leapYears = function(x) {

    // if modulous 400 return true
    if (x % 400 === 0 ) {
        return true;
    } else if (x % 100 === 0) {
        return false;
    } else if (x % 4 === 0) {
        return true;
    } else {
        return false;
    };
    // else if Modulous 4 && !100 true
    // else false 

};

// Do not edit below this line
module.exports = leapYears;
