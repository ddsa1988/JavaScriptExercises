"use struct";

// Write a JavaScript script to empty an array keeping the original

const sampleArray = [1, 2, 3, 4, 5, 6, 7];

// const arr = sampleArray.slice();
const arr = [...sampleArray];
arr.length = 0;

console.log(sampleArray);
console.log(arr);
