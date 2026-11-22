const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item) {
    const index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

removeElement(array, 5);
console.log(array);