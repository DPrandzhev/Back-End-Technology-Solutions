function solve(index, arr)

{
    'use strict';
    let arr_new = new Array();

    for (let i = 0; i < index; i++)
    {
        arr_new[i] = arr[i];
    }
    

    console.log(arr_new.reverse().join(' '));
}












solve(3, [10, 20, 30, 40, 50])
solve(4, [-1, 20, 99, 5])
solve(2, [66, 43, 75, 89, 47])
