// JS Problem 3: Write a JavaScript program to find the most frequent element in an array and return it. 

const findFrequentElement = (arr) => {
    let frequency = 0;
    let frequentElement = 0;
    for (let i = 0; i < arr.length; i++) {
        let freq = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                freq ++;
            }
        }
        // console.log(freq);
        if (freq > frequency) {
            frequency = freq;
            frequentElement = arr[i];
            // console.log("Freq Element " + frequentElement);
        }
    }
    console.log(frequentElement);
}

const array = [3,5,2,5,3,3,1,4,5];
findFrequentElement(array);