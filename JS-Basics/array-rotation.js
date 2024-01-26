function solve(arr_input, rotations) {
    `use strict`

    for (let i = 0; i < rotations; i++) {

        let currentNum = arr_input[0];
        arr_input.shift(currentNum);
        arr_input.push(currentNum);
        

    }
    console.log(arr_input.join(' '));

 }


solve([51, 47, 32, 61, 21], 2)