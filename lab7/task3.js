const unique = (arr) => {
    const result = [];
    for (const i of arr) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }
    return result;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);