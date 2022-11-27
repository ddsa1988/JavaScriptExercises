"use strict";

/*
There are two arrays with individual values, write a JavaScript program to 
compute the sum of each individual index value from the given arrays. Go to the editor
Sample array : array1 = [1,0,2,3,4]; array2 = [3,5,6,7,8,13];
Expected Output : [4, 5, 8, 10, 12, 13]
*/

const sumArrays = function (arr1, arr2) {
    if (!Array.isArray(arr1) || !arr1.length) throw "Invalid Array 1";
    if (!Array.isArray(arr2) || !arr2.length) throw "Invalid Array 2";

    const sum = new Array();
    const length = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < length; i++) {
        sum.push((arr1[i] ?? 0) + arr2[i] ?? 0);
    }

    return sum;
};

const sampleArray1 = [1, 0, 2, 3, 4];
const sampleArray2 = [3, 5, 6, 7, 8, 13];

console.log(sumArrays(sampleArray1, sampleArray2));
