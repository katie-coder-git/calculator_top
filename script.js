function roundtoDecimals(num) {
    const decimals = 2;
    return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);
}


const operators = {
    add: function (numberA, numberB) {
        return numberA + numberB;
    },
    subtract: function (numberA, numberB) {
        return numberA - numberB;
    },
    multiply: function (numberA, numberB) {
        return roundtoDecimals(numberA*numberB);
    },
    divide: function (numberA, numberB) {
        if (numberB === 0) {
            return NaN;
        }
        else {
            return roundtoDecimals(numberA/numberB);
        }
    }
}

let numA = 0;
let numB = 0;
let operator ;

function operate (numA, numB, operator) {
    return operators[operator](numA, numB);
}
