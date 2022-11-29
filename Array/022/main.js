"use strict";

/*
Write a JavaScript program to compute the union of two arrays. Go to the editor
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/

function union(arr1, arr2) {
    if (!Array.isArray(arr1) || !arr1.length) throw "Invalid Array 1";
    if (!Array.isArray(arr2) || !arr2.length) throw "Invalid Array 2";

    return [
        ...new Set(sampleArray1.flat(10).concat(sampleArray2.flat(10))),
    ].sort((a, b) => a - b);
}

const sampleArray1 = [1, [[2]], 3];
const sampleArray2 = [100, 2, 1, [10]];

console.log(union(sampleArray1, sampleArray2));
