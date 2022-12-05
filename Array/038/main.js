"use strict";

/*
Write a JavaScript function to move an array element from one position to another. Go to the editor

Test Data : console.log(move([10, 20, 30, 40, 50], 0, 2)); [30, 20, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); [10, 20, 30, 50, 40]
*/

function changePositions(arr, pos1, pos2) {
    if (!Array.isArray(arr) || !arr.length)
        throw new TypeError("Invalid Array!");

    if (!Number.isInteger(pos1) || Math.abs(pos1) >= arr.length)
        throw new TypeError("Invalid position 1!");

    if (!Number.isInteger(pos2) || Math.abs(pos2) >= arr.length)
        throw new TypeError("Invalid position 2!");

    // let newArray = arr.slice();
    let newArray = [...arr];

    if (pos1 >= 0 && pos2 >= 0) {
        newArray.splice(pos1, 1, arr[pos2]);
        newArray.splice(pos2, 1, arr[pos1]);
        return newArray;
    }

    if (pos1 < 0 && pos2 < 0) {
        const p1 = arr.length - Math.abs(pos1);
        const p2 = arr.length - Math.abs(pos2);

        newArray.splice(p1, 1, arr[p2]);
        newArray.splice(p2, 1, arr[p1]);
        return newArray;
    }
    throw new TypeError(
        "Position 1 and 2 must be both positive or both negative!"
    );
}

const sampleArray = [10, 20, 30, 40, 50];

console.log(changePositions(sampleArray, 0, 2));
console.log(changePositions(sampleArray, -1, -2));
// console.log(changePositions(sampleArray, 1, -2));
