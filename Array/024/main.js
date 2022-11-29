"use strict";

/*
Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
*/

function arrayRemove(arr) {
    if (!Array.isArray(arr) || !arr.length) throw "Invalid Array";

    const newArray = new Array();

    arr.forEach((element) => {
        if (element) newArray.push(element);
    });

    return newArray;
}

const sampleArray = [NaN, 0, 15, false, -22, "", undefined, 47, null];

console.log(arrayRemove(sampleArray));
