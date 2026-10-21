'use strict';

const max = (...args) => {
    return Math.max(...args.flat(Infinity));
}

const m = max([[1,2,3],[4,5,6],[7,8,9]]);

console.log(m);