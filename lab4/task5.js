'use strict';

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

console.log(sum(10, -1, -1, -1));