function solve(input, repeats) {

    let newSrring = '';

    for (let i = 0; i < repeats; i++) {
        newSrring += input;
    }

    console.log(newSrring);
};

solve('JS', 3);