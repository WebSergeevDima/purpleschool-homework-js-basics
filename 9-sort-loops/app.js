const arr = [40, -5, 10, 0];

const sort = (arr = [], sorted = 'up') => { // sorted: 'up' | 'down'

    for (let num of arr) {
        for (let i in arr) {
            if (i === 0) {
                continue;
            }

            if ((sorted === 'up' && arr[i] < arr[i - 1])
                || (sorted === 'down' && arr[i] > arr[i - 1])) {
                let currentNum = arr[i];
                let perNum = arr[i - 1];

                arr[i - 1] = currentNum;
                arr[i] = perNum;
            }
        }
    }

    return arr;
}

console.log(sort());