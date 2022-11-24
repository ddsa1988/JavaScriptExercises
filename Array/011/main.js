"use strict";

/*
Write a JavaScript program to find the sum of squares of a numeric vector.
*/

function sumArray(arr) {
    const sum = arr
        .map((x) => Math.pow(x, 2))
        .reduce((acc, currValue) => acc + currValue);

    return sum;
}

const sampleArray1 = [2, 3, 4, 5];
const sampleArray2 = [0, 1, 2, 3, 4];

console.log(sumArray(sampleArray1));
console.log(sumArray(sampleArray2));
