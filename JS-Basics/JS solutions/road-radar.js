function checkSpeed(speed, area) {
    const speedLimits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };

    const speedLimit = speedLimits[area.toLowerCase()];

    if (speedLimit === undefined) {
        console.log('Unknown area. Cannot determine speed limit.');
        return;
    }

    const difference = speed - speedLimit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        let status = (difference <= 20) ? 'speeding' : (difference <= 40) ? 'excessive speeding' : 'reckless driving';
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

