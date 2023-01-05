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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    //get alphabet array
    //use shift and push to rotate our array to the cipher (can use splice for this too)
    //then make a hashtable with keys using the original alphabet, values would be the new alphabet
    //iterate through the input string, make a new output string, append to output string value at key when encounter letter

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabetString.split("")
    let cypherArray = [...alphabetArray]

    //start cypher process
    let removedElements = cypherArray.splice(0,k);
    cypherArray = cypherArray.concat(removedElements)

    //create hash table
    const cypherMap = {}

    for(let i = 0; i < alphabetArray.length; i++){
        cypherMap[alphabetArray[i]] = cypherArray[i];
    }

    //start conversion of input string
    let answer =""

    s.forEach( char => {

    })
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
