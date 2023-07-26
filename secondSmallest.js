// JS Problem 8:

const findSecondSmallest=(array)=>{
    const ascendingArray = array.sort((a,b)=>(a-b));
    console.log('Second smallest number is ' + ascendingArray[1]);
}
const ary = [3,5,-2,5,-3,3,1,4,5];
findSecondSmallest(ary);