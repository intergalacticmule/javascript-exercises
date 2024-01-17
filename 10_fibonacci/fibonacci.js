const fibonacci = function (n) {
    if (n < 0) {
        return "OOPS";
    }
    if (typeof n === "string") {
        n = parseInt(n);
    }
    let previousNumOne = 0;
    let previousNumTwo = 1;

    for (i = 0; i < n; i++) {
        let currentNum = previousNumOne + previousNumTwo;
        previousNumTwo = previousNumOne;
        previousNumOne = currentNum;
    }
    return previousNumOne;
};

// Do not edit below this line
module.exports = fibonacci;
