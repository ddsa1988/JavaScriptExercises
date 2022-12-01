"use strict";

/*
Write a JavaScript function to remove a specific element from an array.

Test data : console.log(remove_array_element([2, 5, 9, 6], 5)); [2, 9, 6]
*/

function removeElement(arr, num) {
    if (!Array.isArray(arr) || !arr.length) throw TypeError("Invalid Array!");
    if (!Number.isFinite(num)) throw TypeError("Invalid number!");

    const newArray = new Array();

    arr.forEach((element) => {
        if (element !== num) newArray.push(element);
    });

    return newArray;
}

const sampleArray = [2, 5, 9, 6, 5, 10, 15, 100, 5, 8];

console.log(removeElement(sampleArray, 5));
