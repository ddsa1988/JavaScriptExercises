"use strict";

/*
Write a simple JavaScript program to join all elements of the following array into a string.
*/

function joinArray(arr, char) {
    if (!(Array.isArray(arr) && arr)) return 0;

    char = char ?? " ";

    return arr.join(char);
}

const sampleArray = ["Red", "Green", "White", "Black"];

console.log(joinArray(sampleArray, "+"));
console.log(joinArray(sampleArray, ","));
console.log(joinArray(sampleArray, "0"));
console.log(joinArray(sampleArray, ""));
console.log(joinArray(sampleArray));
