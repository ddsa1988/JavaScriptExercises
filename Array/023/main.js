"use strict";

/*
 Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
*/

function difference(arr1, arr2) {
    if (!Array.isArray(arr1) || !arr1.length) throw "Invalid Array 1";
    if (!Array.isArray(arr2) || !arr2.length) throw "Invalid Array 2";

    const flatArr1 = arr1.flat(10);
    const flatArr2 = arr2.flat(10);
    const arrayDif = new Array();

    flatArr1.forEach((element) => {
        if (!flatArr2.includes(element)) arrayDif.push(element);
    });

    flatArr2.forEach((element) => {
        if (!flatArr1.includes(element)) arrayDif.push(element);
    });

    return arrayDif.sort((a, b) => a - b);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]));
