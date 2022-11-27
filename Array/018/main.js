"use strict";

/*
Write a JavaScript program to perform a binary search. 
Note : A binary search or half-interval search algorithm finds the position of a 
specified input value within an array sorted by key value.
Sample array: items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output:
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/

function binarySearch(arr, number) {
    if (!Array.isArray(arr) || !arr.length) throw "Invalid Array";
    if (!Number.isFinite(number)) throw "Invalid number";

    return arr.indexOf(number);
}

const sampleArray = [1, 2, 3, 4, 5, 7, 8, 9];

console.log(binarySearch(sampleArray, 1));
console.log(binarySearch(sampleArray, 5));
