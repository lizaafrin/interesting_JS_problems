// JS Problem 1: 

const srtingReverse = (str) => {
    const array = str.toLowerCase().split('');
    let reversedArray = [];
    for (let i = array.length -1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    const reversedString = reversedArray.join('');
    console.log(reversedString);
}

const str = 'Hello World';
srtingReverse(str);