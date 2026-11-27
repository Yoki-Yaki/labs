'use strict';

const pipe = (...arg) => {
    for (const fn of arg) {
        if (typeof fn !== 'function') {
            throw new TypeError('argument is not a function');
        }
    }
    return x => arg.reduce((acc, fn) => fn(acc), x);
}

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);

console.log(x);