"use strict";

const phoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'John Doe', phone: '+380954891234' },
    { name: 'Jane Smith', phone: '+380501234567' },
    { name: 'Bob Johnson', phone: '+380496547891' }
];

const findPhoneByName = (name) => {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    return 'Phone number not found';
}

console.log(findPhoneByName('John Doe'));