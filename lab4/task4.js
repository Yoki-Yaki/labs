'use strict';

const sum = (...args) => {
    let result = 0;

    do {
        result += args.pop();
    } while (args.length)
        
    return result;
};

console.log(sum(1, -1, 1));