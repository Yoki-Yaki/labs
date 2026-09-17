'use strict';

const dataSource = [1, "hello", true, false, false, 3, 2.5, "world", true, -1, 0, "test", 5, 6, "example", false, true, 4, "sample", 7];

const types = { boolean: 0, number: 0, string: 0};
const noTypes = {};

const countTypes = () => {
    for (let i of dataSource) {
        types[typeof i]++;
    }
    console.log(types);
}

// countTypes();

const fillAndCountTypes = () => {
    for (let i of dataSource) {
        if (noTypes.hasOwnProperty(typeof i)) {
            noTypes[typeof i]++;
        } else {
            noTypes[typeof i] = 1;
        }
    }
    console.log(noTypes);
}

fillAndCountTypes();