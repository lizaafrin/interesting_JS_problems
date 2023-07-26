// JS Problem 2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const sumOfPositives = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}

const array = [2, -5, 10, -3, 7];
sumOfPositives(array);
