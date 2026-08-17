function roundtoDecimals(num) {
    const decimals = 2;
    return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);
}


const operators = {
    "+": function (nA, nB) {
        return nA + nB;
    },
    "-": function (nA, nB) {
        return nA - nB;
    },
    "x": function (nA, nB) {
        return roundtoDecimals(nA*nB);
    },
    "/": function (nA, nB) {
        if (nB === 0) {
            return NaN;
        }
        else {
            return roundtoDecimals(nA/nB);
        }
    }
}



function operate (numberA, numberB, opr) {
    return operators[opr](numberA, numberB);
}




function calculate (numberA, numberB, opr) {
    outcomeNum = operate(numberA, numberB, opr);
    displayValue(outcomeNum);
    previousOutcomeNum = outcomeNum;
    numStrA = '';
    numStrB = '';    
    operator = '';
}

function displayReset () {
    const outputReset = 0;
    displayValue(outputReset);
}

function displayValue(numOrStr) {
    display.textContent = String(numOrStr);
}


let numStrA = '' ;
let numStrB = '';
let operator = '';
let previousOutcomeNum = 0;


const display = document.querySelector(".display");
displayReset ();

const numStrButtons = document.querySelectorAll(".numStr");
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

function concatNumStr (numStr1, numStr2) {
    if (numStr1 === '0') {
        return '' + numStr2;
    } else {
        return numStr1 + numStr2;
    }
}


numStrButtons.forEach((numStrButton) => {
    numStrButton.addEventListener( "click", (e) => {
        if (operator === '' ) {
            numStrA = concatNumStr(numStrA, e.target.textContent);
            displayValue(numStrA);
        } else {
            numStrB = concatNumStr(numStrB, e.target.textContent);
            displayValue(numStrB);
        }
       
    })
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
        if (numStrA !== '' && operator !=='' && numStrB !== '' ) {
            calculate(Number(numStrA), Number(numStrB), operator);        
        }

        if (numStrA === '' && operator ==='' && numStrB ==='') {
            numStrA = String(previousOutcomeNum);
        }

        operator = e.target.textContent;
    })
});

equalButton.addEventListener("click", (e) => {

    if (numStrA && operator && numStrB ) {
        calculate(Number(numStrA), Number(numStrB), operator);
    }
});

clearButton.addEventListener("click", (e) => {
    numStrA = '';
    numStrB = '';
    operator = '';
    previousOutcomeNum = 0;
    displayReset();
})











