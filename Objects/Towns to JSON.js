function solve(input) {
    let output = [];

    for (let i = 1; i < input.length; i++) {
        let [_, town, latitude, longitude] = input[i].split('|');
        town = town.trim();
        latitude = Number(latitude);
        longitude = Number(longitude);
        latitude = latitude.toFixed(2);
        longitude = longitude.toFixed(2);
        latitude = Number(latitude);
        longitude = Number(longitude);
        let currentTown = { Town: town, Latitude: latitude, Longitude: longitude };
        output.push(currentTown);
    }
    console.log(JSON.stringify(output));

}
solve(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);