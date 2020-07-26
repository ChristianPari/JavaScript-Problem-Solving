/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

const orbitalPeriod = (arr) => {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    if (arr.length > 1) {

        arr.forEach(element => {

            // extract data from obj with desctruing
            const { avgAlt, name } = element;
            // a - c are the necessary steps within the math formual to be able to calculate the seconds
            const a = avgAlt + earthRadius;
            const b = Math.pow(a, 3) / GM;
            const c = Math.sqrt(b);
            // finish the formula to get the seconds
            const seconds = Math.round((2 * Math.PI) * c);
            // create the new obj that will be replacing the one being used at the moment to calculate the orbital period
            const newObj = { "name": name, "orbitalPeriod": seconds };
            // find the idx location that will be getting replaced with the new data
            const idx = arr.indexOf(element);
            // assign new data to the array in the "idx" location
            arr[idx] = newObj;

        });

        // return the array with the updated information
        return arr;

    } else {

        // extract data from obj with desctruing
        const { avgAlt, name } = arr[0];
        // a - c are the necessary steps within the math formual to be able to calculate the seconds
        const a = avgAlt + earthRadius;
        const b = Math.pow(a, 3) / GM;
        const c = Math.sqrt(b);
        // finish the formula to get the seconds
        const seconds = Math.round((2 * Math.PI) * c);
        // create the new obj that will be replacing the one being used at the moment to calculate the orbital period
        const newObj = { "name": name, "orbitalPeriod": seconds };
        // assign the new data to the array in place of the old data
        arr[0] = newObj;
        // return the array with the updated information
        return arr;

    }

}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }, { name: "test", avgAlt: 12345 }]);