"use strict";

/*
Write a JavaScript function to filter false, null, 0 and blank values from an array. 

Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]
*/

function filterArray(arr) {
    if (!Array.isArray(arr) || !arr.length)
        throw new TypeError("Inavalid Array!");

    const newArray = new Array();

    arr.forEach((element) => {
        if (element) newArray.push(element);
    });

    return newArray;
}

const sampleArray = [58, "", "abcd", true, null, false, 0];
console.log(filterArray(sampleArray));
