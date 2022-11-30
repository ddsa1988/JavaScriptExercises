"use strict";

/*
Write a JavaScript program to find a pair of elements (indices of the two numbers) 
from an given array whose sum equals a specific target number.
Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
*/

function sum(arr, target) {
    if (!Array.isArray(arr) || arr.length < 2) throw "Invalid Array!";
    if (!Number.isFinite(target)) throw "Invalid Number!";

    const indices = new Array();
    let pairFound = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                indices.push(i, j);
                pairFound = true;
                break;
            }
        }
        if (pairFound) break;
    }

    return indices;
}

const sampleArray = [10, 20, 10, 40, 50, 60, 70];

console.log(sum(sampleArray, 50));
console.log(sum(sampleArray, 100));
console.log(sum(sampleArray, 90));
