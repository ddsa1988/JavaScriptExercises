"use struct";

/*
 Write a JavaScript function to get nth largest element from an unsorted array.

Test Data : console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); 89
*/

function largestNumber(arr, number) {
    if (!Array.isArray(arr) || !arr.length) throw TypeError("Invalid Array!");
    if (!Number.isFinite(number)) throw TypeError("Invalid Number!");

    let largest = -Infinity;
    let count = 0;
}

const sampleArray = [43, 56, 23, 89, 88, 90, 99, 652];

largestNumber(sampleArray, 4);
