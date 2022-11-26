"use strict";

// Write a JavaScript program to shuffle an array.

const sampleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffleArray(arr) {
    if (!Array.isArray(arr) || !arr.length) throw "Invalid Array";

    const randomIndex = new Array();
    const shuffledArray = new Array();

    while (randomIndex.length < arr.length) {
        const random = Math.floor(Math.random() * arr.length);

        if (randomIndex.indexOf(random) < 0) {
            shuffledArray.push(arr[random]);
            randomIndex.push(random);
        }
    }

    return shuffledArray;
}

console.log(shuffleArray(sampleArray));
