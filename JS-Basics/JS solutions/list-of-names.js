function solve(arrNames) {


    let counter = 0;
    arrNames.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < arrNames.length; i++) {
        counter++;

        console.log(`${counter}.${arrNames[i]}`);

    }

}

solve(["John", "Bob", "Christina", "Ema"])
