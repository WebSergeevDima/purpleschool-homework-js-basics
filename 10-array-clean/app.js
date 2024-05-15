const cleanNumber = clearNum => clearNum > 5;

const getArrayClean = (arr, callback) => {
    const newArr = [];

    for (let index in arr) {
        if (!callback(arr[index])) {
            newArr.push(arr[index]);
        }
    }

    return newArr;
}

console.log(getArrayClean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], cleanNumber))