"use strict";

/*
Write a JavaScript function to find the longest common starting substring in a set of strings.

Sample array : console.log(longest_common_starting_substring(['go', 'google']));
Expected result : "go"
*/

function getSubstring(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) throw "Invalid Array!";

    const [first, second] = [...arr];
    const startSlice = second.indexOf(first);
    const endSlice = startSlice + first.length;

    return second.slice(startSlice, endSlice);
}

console.log(getSubstring(["go", "google"]));
console.log(getSubstring(["go", "Amanda Letícia Nunes Perna"]));
console.log(getSubstring(["Perna", "Amanda Letícia Nunes Perna"]));
console.log(getSubstring(["Santos", "Diego dos Santos Alexandre"]));
