function solve (input) 
{
    `use strict`;
    let result = 0

    if (typeof input === 'number')
    {
        result = Math.PI * (input ** 2)
        console.log(result.toFixed(2));
    }

    else 
    {
        console.log(`We can not calculate the circle area, because we received a ${typeof(input)}.`);
    }
}

solve(5);