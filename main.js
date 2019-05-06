// `use strict`

const equals = document.querySelector(`equals`);
const numbers = document.querySelectorAll(`calc_keys`);
const arithmeticOperators = document.querySelectorAll(`operators`);
const ampersand = document.querySelector(`ampersand`);
const clear = document.querySelector(`clear`);
const display = document.getElementById(`display`);

function doMath(input) {
    return eval(input);
}

function multiplication(ampersand) {
    switch (ampersand) {
        case `*`:
    }
}

// function calculator() {
//     let input = ``;
//     let calculation = ``;
//     for (let button in numbers) {
//         button.addEventListener('click', function () {
//             display.innerText = button.innerText;
//             calculation += input;
//         });
//         for (let button in arithmeticOperators) {
//             button.addEventListener('click', function () {
//                 display.innerText = button.innerText;
//                 calculation += input;
//             });
//         }

//         clear.addEventListener('click', function () {
//             display.innerText = ``;
//             calculation = ``;
//             calculatedText = ``;
//         });

//         equals.addEventListener('click', function () {
//             if (evalText != ``) {
//                 display.calculation = doMath(calculation);
//                 display.innerText = calculation;
//                 calculatedText = calculation;
//             }
//         });
//     }
// }

function calculator() {
    numbers.addEventListener (`click`, function(event) {
        if (event.target && event.target.nodeName === `BUTTON` && event.target.classList.contains('numbers'))
            console.log(`innerText`)
    });
}

function main() {
    calculator();
}

document.addEventListener('DOMContentLoaded', main)