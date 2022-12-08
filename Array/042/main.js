"use strict";

/*
 Write a JavaScript function to find the unique elements from two arrays.

Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10])); ["1", "2", "3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]])); ["1", "2", "3", "4", "5", "6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); ["1", "2", "3", "10", "100"]
*/

function uniqueElements(arr1, arr2) {
    if (!Array.isArray(arr1) || !arr1.length)
        throw TypeError("Invalid Array 1!");
    if (!Array.isArray(arr2) || !arr2.length)
        throw TypeError("Invalid Array 2!");

    const newArray = arr1.flat(Infinity).concat(arr2.flat(Infinity));

    return [...new Set(newArray)].sort((a, b) => a - b);
}

console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10]));
console.log(uniqueElements([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10]));
