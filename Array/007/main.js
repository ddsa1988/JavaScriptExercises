"use strict";

/*
Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
Sample Output : -4,1,2,3,5,6,7,8
*/

console.log("Sort crescent order: ");
const sampleArray1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

const output1 = sampleArray1.sort((a, b) => a - b);

console.log(output1);
console.log(sampleArray1);

console.log();

console.log("Sort decrescent order: ");
const sampleArray2 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const output2 = sampleArray2.sort((a, b) => b - a);

console.log(output2);
console.log(sampleArray2);
