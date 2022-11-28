"use strict";

// Write a JavaScript program to find duplicate values in a JavaScript array

function duplicateValue(arr) {
    if (!Array.isArray(arr) || !arr.length) throw "Invalid Array";

    const duplicateArray = new Array();
    const duplicateObject = new Object();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j + 1]) {
                if (!duplicateObject[arr[i]]) duplicateObject[arr[i]] = 1;
                else duplicateObject[arr[i]] += 1;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j + 1] && duplicateArray.indexOf(arr[i]) < 0) {
                duplicateArray.push(arr[i]);
            }
        }
    }

    return [duplicateArray, duplicateObject];
}

const sampleArrary = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

console.log(duplicateValue(sampleArrary));
