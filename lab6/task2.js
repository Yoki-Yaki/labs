'use strict';

const compose = (...arg) => {
    const handlers = [];

    const result = x => {
        try {
            return arg.reduceRight((acc, fn) => fn(acc), x);
        } catch (e) {
            for (const handler of handlers) {
                handler(e);
            }

            return undefined;
        }
    };

    result.on = (event, handler) => {
        if (event === 'error') {
            handlers.push(handler);
        }
    };

    return result;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);

f.on('error', e => {
    console.log(e.message);
});

const x = f(5);
console.log(x);