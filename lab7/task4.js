const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];

const difference = (arr1, arr2) => {
    const result = [];
    for (const i of arr1) {
        if (!arr2.includes(i)) {
            result.push(i);
        }
    }
    return result;
}

const result = difference(array1, array2);
console.log(result);