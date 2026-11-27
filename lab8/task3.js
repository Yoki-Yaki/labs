'use strict';

const contract = (fn, ...types) => {
    const result = (...args) => {
        if (args.length !== types.length - 1) {
            throw new TypeError('Not a right amount of arguments');
        }

        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] !== types[i].name.toLowerCase()) {
                throw new TypeError(`Argument ${i + 1} is not of type ${types[i].name}`);
            }
        }

        const value = fn(...args);

        if (typeof value !== types[types.length - 1].name.toLowerCase()) {
            throw new TypeError('Invalid return type');
        }

        return value;
    }
    return result;
}


const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res);

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);