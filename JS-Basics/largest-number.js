function solve(numbOne, numbTwo, numbTree) {
    'use strict';
    if (numbOne > numbTwo && numbOne > numbTree) {
        console.log(`The largest number is ${numbOne}.`);
    } else if (numbTwo > numbOne && numbTwo > numbTree) {
        console.log(`The largest number is ${numbTwo}.`);;
    } else {
        console.log(`The largest number is ${numbTree}.`);;
    }
}
solve(5, -3, 16);