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
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here

    //if there's an even number of pages, then there's an extra page to turn
    if( n%2 === 0 ){
        //get minimum between turning from the front and the end
            //turning from the front would be p/2 pages
        return Math.min( Math.floor(p/2), Math.floor( (n-p)/2)+1 )
    } else {
        return Math.min( Math.floor(p/2), Math.floor( (n-p)/2) )
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const p = parseInt(readLine().trim(), 10);

    const result = pageCount(n, p);

    ws.write(result + '\n');

    ws.end();
}
