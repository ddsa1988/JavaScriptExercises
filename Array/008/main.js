"use strict";

/*
Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

const sampleArray = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

const output = [0, 0];

for (let i = 0; i < sampleArray.length; i++) {
    let cont = 0;

    for (let j = i; j < sampleArray.length; j++) {
        if (sampleArray[i] === sampleArray[j]) cont++;
    }

    if (cont > output[1]) {
        output[0] = sampleArray[i];
        output[1] = cont;
    }
}

console.log(output);
