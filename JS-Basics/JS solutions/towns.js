function processTowns(townsInput) {
    for (const townInfo of townsInput) {
        const [town, latitude, longitude] = townInfo.split(' | ');

        const formattedLatitude = Number(latitude).toFixed(2);
        const formattedLongitude = Number(longitude).toFixed(2);

        const townObject = {
            town,
            latitude: formattedLatitude,
            longitude: formattedLongitude
        };

        console.log(townObject);
    }
}