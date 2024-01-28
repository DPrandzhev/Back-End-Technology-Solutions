function fruits(product, amount, cost) 


{
 `use strict`;

    

    let amount_kg = amount / 1000;
    let total_price = amount_kg * cost;

    console.log(`I need $${total_price.toFixed(2)} to buy ${amount_kg.toFixed(2)} kilograms ${product}.`)




}

fruits('banana', 2500, 1.80);