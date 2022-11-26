"use strict";

/*
Write a JavaScript program to find the leap years in a given range of years.
*/

const h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);

function isLeapYear(year) {
    if (!(year % 400)) return true;
    if (!(year % 100)) return false;
    if (!(year % 4)) return true;

    return false;
}

function getLeapYear(yearMin, yearMax) {
    const leapYears = {};
    for (let i = yearMin; i <= yearMax; i++) {
        leapYears[i] = isLeapYear(i);
    }

    return leapYears;
}

console.log(getLeapYear(2000, 2020));
// h1.insertAdjacentHTML("afterend", `${JSON.stringify(getLeapYear(2000, 2020))}`);
