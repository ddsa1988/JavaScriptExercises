"use strict";

/*
Write a JavaScript function to create a specified number of elements with pre-filled numeric value array.

Test Data : console.log(array_filled(6, 0)); [0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11)); [11, 11, 11, 11]
*/

function arrayFilled(size, value) {
    if (!Number.isInteger || size < 1)
        throw TypeError("Size must be a positive integer greater than zero");

    if (!Number.isFinite(value)) throw TypeError("Value must be a number!");

    const newArray = new Array(size);

    return newArray.fill(value);
}

console.log(arrayFilled(6, 0));
console.log(arrayFilled(4, 11));
