/**
 * @param {string} s
 * @return {string}
 */
 var longestNiceSubstring = function(s) {
    //sliding window attempt
    //use new array as our window
    //as we iterate through the string, look at each letter
    //see if the rest of the string has the (lower/Upper) version of our letter
    //if it does push it into our window
    //if it doesn't move onto the next letter, our window hasn't started yet
    //once we encounter a letter that doesn't have it's pair, we record the size of our current array (this is the longest nice substring seen so far)

    //There's an error with the idea above, the issue is once we encounter a letter with no pair, we need to only look at the rest of the string starting from
    //after the letter with no pair, our idea scans the whole string rather than the new portion we need to change this

    //idea 2:
    //use the substring method (it takes in a start index, and an end index thats exclusive)
    //start index will initially be beginning of string, end index 1 index after the end.
    //similar to approach above: as we iterate through the string we still have an array to use as a window
    //we look at each letter, see if it has a pair in the substring, if it does push to our window but now change the start index variable for
    //our substring method, but we dont update the substring yet. we will also push the letter to our window array
    //once we encounter a char that doesn't have a pair, we will change our substring start index to the one after our erroneous char
    //we grab the new substring, save the length of the current array, clear the array, and restart the process.

    if(s.length <= 1){
        return "";
    }

    let startOfSubstring = 0;
    let endOfSubstring = s.length;
    let currentSubstringForComparisons = s.substring(startOfSubstring, endOfSubstring);
    let longestSubstringSeenSoFar = "";
    let niceSubstringArray = [];

    let pairTracker = new Map()

    for(let i = 0; i < s.length; i++){


        const weHaveAPair = scanStringForPairs(s[i], currentSubstringForComparisons);
        if(weHaveAPair){
            niceSubstringArray.push(s[i]);
            console.log(niceSubstringArray)

            let oppositePair = s[i] === s[i].toUpperCase()? s[i].toLowerCase() : s[i].toUpperCase();

            //have we already added the pair of this character
            pairTracker.has(oppositePair)?
                pairTracker.set(oppositePair, (pairTracker.get(oppositePair) || 0)  - 1 )
                : pairTracker.set(oppositePair, (pairTracker.get(oppositePair) || 0) + 1 )

            if (pairTracker.get(oppositePair) === 0){
                pairTracker.delete(oppositePair)
            }
            console.log(pairTracker)

        } else {
            //we have encountered a char with no pair
            //we need to see if what we currently have is a valid nice string.
            //this changes our plan, we may need a way to keep track of if we currently have a nice string in our array
            console.log("ran", pairTracker)
            //We found a char without a pair, and all our current letters stored have pairs, and our current string is longest
            if(pairTracker.size === 0 && niceSubstringArray.length > longestSubstringSeenSoFar.length){
                longestSubstringSeenSoFar = niceSubstringArray.join("")
            } else {
            //Our current string is not a nice substring
                niceSubstringArray = []
                pairTracker = new Map()
                if(startOfSubstring+1 !== endOfSubstring){
                    startOfSubstring++;
                }
                currentSubstringForComparisons = s.substring(startOfSubstring, endOfSubstring);;
            }
        }
    }
    // console.log(longestSubstringSeenSoFar)
};

function scanStringForPairs(char, substring){
    let pairToFind;

    char === char.toUpperCase()? pairToFind = char.toLowerCase() : pairToFind = char.toUpperCase();

    return substring.includes(pairToFind);
}
