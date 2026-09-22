"use strict";

const phoneBook = {
    'Marcus Aurelius': '+380445554433',
    'John Doe': '+380954891234',
    'Jane Smith': '+380501234567',
    'Bob Johnson': '+380496547891'
}

const findPhoneByName = (name) => {
    return phoneBook[name];
}

console.log(findPhoneByName('John Doe'));