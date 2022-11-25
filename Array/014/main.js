"use strict";

/*
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/

const sampleArray = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
const arr = new Set(sampleArray);

console.log(...arr);
