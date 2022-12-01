"use strict";

/*
Write a JavaScript function to merge two arrays and removes all duplicates elements.

Test data : var array1 = [1, 2, 3]; var array2 = [2, 30, 1];
console.log(merge_array(array1, array2)); [3, 2, 30, 1]
*/

function mergeArrays(arr1, arr2) {
    if (!Array.isArray(arr1) || !arr1.length)
        throw TypeError("Invalid Array 1!");
    if (!Array.isArray(arr2) || !arr2.length)
        throw TypeError("Invalid Array 2!");

    return [...new Set(sampleArray1.concat(arr2).sort((a, b) => a - b))];
}

const sampleArray1 = [1, 2, 3];
const sampleArray2 = [2, 30, 1];

console.log(mergeArrays(sampleArray1, sampleArray2));
