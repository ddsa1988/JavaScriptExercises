"use strict";

/*
Write a JavaScript function to clone an array.
*/

function arrayClone(arr) {
    return arr.slice();
}

const sampleData1 = [1, 2, 4, 0];
const sampleData2 = [1, 2, [4, 0]];

const array1 = arrayClone(sampleData1);
const array2 = arrayClone(sampleData2);

console.log(array1);
console.log(array2);

console.log("\n");

array1.unshift(200);
array2.push(3658);

console.log(sampleData1);
console.log(sampleData2);
console.log(array1);
console.log(array2);
