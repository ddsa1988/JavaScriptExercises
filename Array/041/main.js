"use strict";

/*
Write a JavaScript function to generate an array between two integers of 1 step length. 

Test Data :
console.log(rangeBetwee(4, 7)); [4, 5, 6, 7]
console.log(rangeBetwee(-4, 7)); [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
*/

function arrayRange(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end))
        throw new TypeError("The two numbers must be integers");

    const length = start > end ? start - end + 1 : end - start + 1;
    const step = start > end ? -1 : 1;

    const newArray = new Array(length);

    for (let i = 0; i < length; i++) {
        newArray[i] = start;
        start += step;
    }

    return newArray;
}

console.log(arrayRange(4, 7));
console.log(arrayRange(-4, 7));
console.log(arrayRange(-4, -10));
