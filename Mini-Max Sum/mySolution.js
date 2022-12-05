'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort( (a,b)=>{
        return b-a
    })

    let maxSum = 0
    let minSum = 0

    for(let i = 0; i < arr.length - 1; i++){
        maxSum += arr[i]
    }

    for(let j = arr.length-1; j >= 1; j--){
        minSum += arr[j]
    }

    console.log(minSum, maxSum)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
