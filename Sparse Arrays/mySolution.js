'use strict'

const fs = require('fs')

process.stdin.resume()
process.stdin.setEncoding('utf-8')

let inputString = ''
let currentLine = 0

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin
})

process.stdin.on('end', function () {
    inputString = inputString.split('\n')

    main()
})

function readLine() {
    return inputString[currentLine++]
}

/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY strings
 *  2. STRING_ARRAY queries
 */

function matchingStrings(strings, queries) {
    // Write your code here
    let answerArray = []

    for (let string of queries) {
        let countObject = strings.reduce((accumulator, value) => {
            if (string === value) {
                accumulator.hasOwnProperty(string) ? (accumulator[string] += 1) : (accumulator[string] = 1)
            }
            return accumulator
        }, {})
        answerArray.push(countObject[string] ? countObject[string] : 0)
    }
    return answerArray
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH)

    const stringsCount = parseInt(readLine().trim(), 10)

    let strings = []

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine()
        strings.push(stringsItem)
    }

    const queriesCount = parseInt(readLine().trim(), 10)

    let queries = []

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine()
        queries.push(queriesItem)
    }

    const res = matchingStrings(strings, queries)

    ws.write(res.join('\n') + '\n')

    ws.end()
}
