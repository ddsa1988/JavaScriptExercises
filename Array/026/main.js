"use strict";

/*
Write a JavaScript program to find a pair of elements (indices of the two numbers) 
from an given array whose sum equals a specific target number.
Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
*/

function sum(arr, target) {
    if (!Array.isArray(arr) || !arr.length) throw "Invalid Array!";
    if (!Number.isFinite(target)) throw "Invalid Number!";

    const indices = new Array();
}

const sampleArray = [10, 20, 10, 40, 50, 60, 70];

console.log(sum(sampleArray, 50));
