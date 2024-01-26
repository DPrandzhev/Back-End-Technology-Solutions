function printCityInfo(city) {
    for (let key in city) {
        if (city.hasOwnProperty(key)) {
            console.log(`${key} -> ${city[key]}`);
        }
    }
}
