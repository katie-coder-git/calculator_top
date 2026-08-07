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



function operate (numA, numB, operator) {
    return operators[operator](numA, numB);
}


let numA = 0;
let numB = 0;
let operator ;

const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener( "click", (e) => {
        numA = e.target.textContent;
        display.textContent = e.target.textContent;
    })
});






