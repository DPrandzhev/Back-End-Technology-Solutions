function solve(arr) {
    `use strict;`
    even_arr = [];
    odd_arr = [];
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 2 === 0) {
            even_arr.push(arr[i]);
            even += arr[i];
        }
        else {
            odd_arr.push(arr[i]);
            odd+= arr[i];
        }
    }

    console.log(even - odd);

}


solve([1,2,3,4,5,6])
solve([3,5,7,9])
solve([2,4,6,8,10])
