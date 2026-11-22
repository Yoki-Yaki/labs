const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, item, ...items) {
    const index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    if (items.length > 0) {
        removeElement(arr, ...items);
    }
}

removeElement(array, 5, 1, 6);
console.log(array);