"use strict";

const average = (a ,b) => {
    return (a + b) / 2;
}

const square = (x) => {
    return x**2;
}

const cube = (x) => {
    return x**3;
}

const calculate = () => {
    let result = [];
    for (let i = 0; i <= 9; i++) {
        let a = square(i);
        let b = cube(i);

        let avg = average(a, b);

        result.push(avg);
    }
    return result;
}

console.log(calculate());