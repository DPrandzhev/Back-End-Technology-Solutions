function solve(product, count) {


    let price = 0;

    if (product == "coffee") {
        price = 1.50 * count;
    }
    else if (product == "water") {
        price = 1 * count;
    }
    else if (product == "coke") {
        price = 1.40 * count;
    }
    else if (product == "snacks") {
        price = 2 * count;
    }

    console.log(price.toFixed(2));
 }

