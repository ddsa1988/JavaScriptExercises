"use strict";

/*
Write a JavaScript program to compute the sum and product of an array of integers..
*/

function sumProdutctArray(arr) {
    const sum = arr.reduce((acc, currValue) => acc + currValue);
    const product = arr.reduce((acc, currValue) => acc * currValue);

    return { sum: sum, product: product }; // returns an object
}

const sampleArray1 = [2, 3, 4, 5];
const sampleArray2 = [1, 2, 3, 4, 5, 6];

console.log(sumProdutctArray(sampleArray1));
console.log(sumProdutctArray(sampleArray2));
