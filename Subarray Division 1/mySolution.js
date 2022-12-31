'use strict';

const fs = require('fs');

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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Write your code here
    let beginningPointer = 0;
    let endPointer = 0;
    
    const birthdaySum = d;
    const birthdayLength = m;
    
    let currentSum = 0;
    
    let splittableWays = 0;
    
    
    while(endPointer < s.length){
        
        //while endPointer is not 1 past birthdayLength
        while(endPointer - beginningPointer !== birthdayLength){
            //start moving the pointer
            currentSum += s[endPointer];
            endPointer++;
            if(currentSum === birthdaySum){
                splittableWays++;
            }
        }
        
        if(endPointer - beginningPointer === birthdayLength){
            currentSum -= s[beginningPointer];
            beginningPointer++;
        }
        
    }

    return splittableWays;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
