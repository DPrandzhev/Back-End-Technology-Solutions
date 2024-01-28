function solve(arrayNumbs, step) {
    `use strict`;
    let newArray = new Array;

    for (let i = 0; i < arrayNumbs.length; i+=step) {

        newArray.push(arrayNumbs[i]);
        

    }
    return newArray;
 }


solve(['5', '20', '31', '4', '20'], 2)
