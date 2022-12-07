/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    //xyzzaz
    //i know that i need to find substrings of length 3
    //Brute force:
    //We can iterate through and grab all substrings of length 3
    //then we iterate through those substrings and check for duplicate letters
    //we have a counter, counter++ if there are no dupes in the specific substring
    //return count

    if (s.length < 3) {
        return 0
    }

    let countOfGoodStrings = 0
    const substringLength = 3
    //go through each char in string
    for (let i = 0; i < s.length - substringLength + 1; i++) {
        //as we go through get substrings of length 3
        let substring = s.slice(i, i + substringLength)
        //we need to check if this substring is good or not
        if (checkIfGoodSubstring(substring)) {
            countOfGoodStrings++
        }
    }
    return countOfGoodStrings
}

function checkIfGoodSubstring(substring) {
    let goodSubString = true
    //We need a frequency data structure to see frequency of letters
    //hashMap
    let frequencyOfLetters = {}
    for (let letter of substring) {
        frequencyOfLetters.hasOwnProperty(letter) ? frequencyOfLetters[letter]++ : (frequencyOfLetters[letter] = 1)
    }

    //we need to go through see if theres any letters that have occurance > 1
    Object.values(frequencyOfLetters).forEach(letterFreq => {
        if (letterFreq > 1) {
            goodSubString = false
        }
    })
    return goodSubString
}
