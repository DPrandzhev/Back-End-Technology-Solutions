function printandSum (start, finish) {
    `use strict`;


    let all_nums = [];
    let sum = 0

    for (let i = start; i <= finish; i++) {
        all_nums.push(i);
        sum += i;
    }

    console.log(all_nums.join(' '));
    console.log(`Sum: ${sum}`);
    
}

printandSum(5, 10)