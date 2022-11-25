"use strict";

/*
We have the following arrays : 
color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
o = ["th","st","nd","rd"]
Write a JavaScript program to display the colors in the following way :
"1st choice is Blue ."
"2nd choice is Green."
"3rd choice is Red."
*/

const sampleArray = [
    "Blue ",
    "Green",
    "Red",
    "Orange",
    "Violet",
    "Indigo",
    "Yellow ",
];

const ordinal = ["st", "nd", "rd", "th"];

for (let i = 0; i < sampleArray.length; i++) {
    const ord = i < 3 ? ordinal[i] : ordinal[3];

    console.log(`${i + 1}${ord} choice is ${sampleArray[i]}`);
}
