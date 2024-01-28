function processStore(stock, order) {
    const inventory = {};

    for (let i = 0; i < stock.length; i += 2) {
        const product = stock[i];
        const quantity = Number(stock[i + 1]);
        inventory[product] = quantity;
    }

    for (let i = 0; i < order.length; i += 2) {
        const product = order[i];
        const quantity = Number(order[i + 1]);

        if (inventory.hasOwnProperty(product)) {
            
            inventory[product] += quantity;
        } else {

            inventory[product] = quantity;
        }
    }


    for (const [product, quantity] of Object.entries(inventory)) {
        console.log(`${product} -> ${quantity}`);
    }
}


const currentStock = [
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
];
const newOrder = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
];

processStore(currentStock, newOrder);
