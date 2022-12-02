"use strict";

// Write a JavaScript function to get a random item from an array

function getItem(arr) {
    if (!Array.isArray(arr) || !arr.length) throw TypeError("Invalid Array!");

    const random = Math.floor(Math.random() * arr.length);

    return arr[random];
}

const sampleArray = [254, 45, 212, 365, 2543, 356, 958, 10, 69];

console.log(getItem(sampleArray));
