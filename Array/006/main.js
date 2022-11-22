"use strict";

/*
Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. 
For example if you accept 025468 the output should be 0-254-6-8
*/

const evenNumbers = ["0", "2", "4", "6", "8"];
const sNumber = "025468";
const sOutput = [sNumber[0]];

for (let i = 1; i < sNumber.length; i++) {
    if (Number(sNumber[i - 1]) % 2 === 0 && Number(sNumber[i]) % 2 === 0) {
        sOutput.push("-", sNumber[i]);
        continue;
    }
    sOutput.push(sNumber[i]);
}

console.log(sOutput.join(""));
