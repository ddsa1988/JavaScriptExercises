"use strict";

/*
 Write a JavaScript program which accept a string as input and swap the case of each character. 
 For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
*/

const input = "The Quick Brown Fox";
const lowerCaseMin = 97; // char 'a'
const lowerCaseMax = 122; // char 'z'

const arrayInput = [...input];
let output = [];

for (let i = 0; i < arrayInput.length; i++) {
    const charNumber = arrayInput[i].charCodeAt();

    if (charNumber >= lowerCaseMin && charNumber <= lowerCaseMax) {
        output.push(arrayInput[i].toUpperCase());
        continue;
    }

    output.push(arrayInput[i].toLowerCase());
}

console.log(output.join(" "));
