function inventory(input) {
    let heroes = [];

    for (let data of input) {
        let [heroName, heroLevel, items] = data.split(' / ');
        heroLevel = Number(heroLevel);
        items = items ? items.split(', ') : [];

        let hero = {
            name: heroName,
            level: heroLevel,
            items: items
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}

