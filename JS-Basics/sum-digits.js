
function sum(params) {
    'use strict';

    let sum = 0;
    const numbAsString = params.toString();

    for (const char of numbAsString) {
        const charAsString = parseInt(char, 10);
        sum += charAsString;

    }
    console.log(sum)
}

sum(245678);