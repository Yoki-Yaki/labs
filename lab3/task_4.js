"use strict";

const iface = {
  m1: x => [x],

  m2: function (x, y) {
    return [x, y];
  },

  m3(x, y, z) {
    return [x, y, z];
  }
}

const methods = (iface) => {
    let result = [];

    for (let i in iface) {
        result.push([i, iface[i].length]);
    }
    
    return result;
};

//console.log(methods(iface));
console.log(JSON.stringify(methods(iface)));