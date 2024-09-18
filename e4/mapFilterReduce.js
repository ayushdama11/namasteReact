// Map, filter, reduce - higher order functions
// higher order functions - has functions inside functions inside functions

const arr = [5,1,3,2,6]

// ** MAP function is used to transform an array **

// double - [10,2,6,4,12]
// triple - [15,3,9,6,18]
// binary - ["101","1,"11","10","110"]

// function double(x){
//     return x*2;
// }
// function triple(x){
//     return x*3;
// }
// function binary(x){
//     return x.toString(2);
// }

// const output = arr.map(double);
// console.log(output);    // [ 10, 2, 6, 4, 12 ]

// const output = arr.map(triple);
// console.log(output);    // [ 15, 3, 9, 6, 18 ]

// const output = arr.map(binary);
// console.log(output);    // [ '101', '1', '11', '10', '110' ]


// const output = arr.map((x)=>x.toString(2));
// console.log(output)



// ** filter 
// function isOdd(x){
//     return x % 2;
// }
// const output = arr.filter(isOdd)

// console.log(output);    // [ 5, 1, 3 ]



// ** reduce - used at the place where we have to acces all the values of array and come out of single value

// sum or max

function findSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum+arr[i];
    }
    return sum;
}

console.log(findSum(arr));  // 17

// reduce takes 2 argument :- a function which has argument as acc-accumulator and curr-current AND inital value for accumulator
// curr represents the values of arr , current val
// acc is used to accumulate the values or result that we have to get from the array

const output = arr.reduce(function(acc,curr){
    acc = acc+curr;
    return acc;
});
console.log(output)




