"use strict";

/*
Write a JavaScript function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array
*/

function arrayLast(arr, n) {
    if (!(Array.isArray(arr) && arr)) return 0;

    if (!n || n < 1) return arr[arr.length - 1];

    //const a = Math.max(arr.length - n);

    return arr.slice(Math.max(arr.length - n, 0));
}

console.log(arrayLast([7, 9, 0, -2]));
console.log(arrayLast([7, 9, 0, -2], 3));
console.log(arrayLast([7, 9, 0, -2], 6));
