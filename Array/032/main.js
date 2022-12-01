"use strict";

/*
Write a JavaScript function to find an array contains a specific element.

Test data : arr = [2, 5, 9, 6];
console.log(contains(arr, 5));
[True]
*/

function contains(arr, element) {
    if (!Array.isArray(arr) || !arr.length) throw TypeError("Invalid Array!");

    return arr.includes(element);
}

const sampleArray = [2, 5, 9, 6];

console.log(contains(sampleArray, 5));
console.log(contains(sampleArray, 25));
console.log(contains(["a", "b", "c", "d"], "c"));
