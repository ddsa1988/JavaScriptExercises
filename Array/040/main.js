"use strict";

/*
Write a JavaScript function to generate an array of specified length, filled with integer numbers,
increase by one from starting position. Go to the editor

Test Data :
console.log(array_range(1, 4)); [1, 2, 3, 4]
console.log(array_range(-6, 4)); [-6, -5, -4, -3]
*/

function arrayRange(start, length) {
    if (!Number.isInteger(start) || !Number.isInteger(length))
        throw new TypeError("The two numbers must be integers");

    const newArray = new Array(length);

    for (let i = 0; i < length; i++) {
        newArray[i] = start++;
    }

    return newArray;
}

console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));
