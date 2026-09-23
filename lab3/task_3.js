"use strict";

//const ipTransform = (ip) => {
//    const ipParts = ip.split('.').map(Number);
//    let result = 0;

//    for (let i = 0; i < ipParts.length; i++) {
//        result += ipParts[i] << (8 * (3 - i));
//    }
//    return result;
//};

const ipTransform = (ip) => {
    return ip.split('.').reduce((result, part, index) => {
        return result + (part << (8 * (3 - index)));
    }, 0);
};

console.log(ipTransform('127.0.0.1'));