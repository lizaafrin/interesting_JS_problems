// JS Problem 4:

function findTwoNumbersWithSum(arr, target) {
    let index = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                index.push(i, j);
            }
        }
    }
    if (index.length > 2) {
        for (let i = 0; i < index.length; i = i + 2) {
            console.log([index[i], index[i + 1]]);
        }
    }
    else if (index.length === 2) {
        console.log([index[0], index[1]]);
    }
    else {
        console.log('We could not find any pair that matches the target value');
    }
}

findTwoNumbersWithSum([1, 3, 6, 8, 11, 15], 9);

