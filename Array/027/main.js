"use strict";

// Write a JavaScript function to retrieve the value of a given property from all elements in an array.

function retrieve(arr, property) {
    if (!Array.isArray(arr) || !arr.length) throw "Invalid Array!";

    const newArray = new Array();

    // for (let i = 0; i < arr.length; i++) {
    //     if (Object.prototype.toString.call(arr[i]) === "[object Object]") {
    //         if (arr[i].hasOwnProperty(property)) {
    //             newArray.push(arr[i]);
    //         }
    //     }
    // }

    arr.forEach((element) => {
        if (Object.prototype.toString.call(element) === "[object Object]") {
            if (element.hasOwnProperty(property)) {
                newArray.push(element[property]);
            }
        }
    });

    return newArray;
}

const library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        libraryID: 3245,
    },
    [1, 2, 3],
];

console.log(retrieve(library, "title"));
console.log(retrieve(library, "author"));
console.log(retrieve(library, "test"));
