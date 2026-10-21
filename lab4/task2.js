'use strict';

const sum = (...args) => {
    let result = 0;
    for (let i of args) {
        result += i;
    }
    return result;
};

console.log(sum(0));