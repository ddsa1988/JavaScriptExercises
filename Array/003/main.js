"use strict";

/*
Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array
*/

function arrayFirst(arr, n) {
    if (!(Array.isArray(arr) && arr)) return 0;

    if (!n || n < 1) return arr[0];

    return arr.slice(0, n);

    // n = n ? (n >= 0 ? n : 0) : 1;
    // return arr.slice(0, n);
}

console.log(arrayFirst([7, 9, 0, -2]));
console.log(arrayFirst([], 3));
console.log(arrayFirst([7, 9, 0, -2], 3));
console.log(arrayFirst([7, 9, 0, -2], 6));
console.log(arrayFirst([7, 9, 0, -2], -3));
console.log(arrayFirst(25));
