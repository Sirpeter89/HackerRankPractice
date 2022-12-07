/**
 * @param {string} s
 * @return {number}
 */
 var countGoodSubstrings = function(s) {
    //Previous brute force method was too slow O(n^2*k)
    //it was re-iterating over substrings that contained chars that we already went through
    //rather than reslicing instead we see that as we're going through the substrings we can remove the first character we already saw
    //and add in the next character instead
    //we can do this with pointers
    //sliding window method

    let frequencyMap = new Map()

    if (s.length < 3){
        return 0;
    }

    let beginningOfWindow= 0;
    let endOfWindow = 0;
    let count = 0;

    //while we haven't seen 3 characters yet
    while(endOfWindow !== beginningOfWindow + 3 && endOfWindow < s.length){
        //count frequency of character
        if (frequencyMap.has(s[endOfWindow]) ){
            frequencyMap.set(s[endOfWindow], frequencyMap.get(s[endOfWindow]) + 1)
        }
        else {
            frequencyMap.set(s[endOfWindow], 1)
        }

        //we don't have 3 unique characters
        if (endOfWindow === beginningOfWindow + 2 && frequencyMap.size !== 3){
            //move beginning pointer up, update frequency map
            frequencyMap.set(s[beginningOfWindow], frequencyMap.get(s[beginningOfWindow]) - 1)
            if(frequencyMap.get(s[beginningOfWindow]) === 0 ){
                frequencyMap.delete(s[beginningOfWindow])
            }
            beginningOfWindow++
        } else if (endOfWindow === beginningOfWindow + 2){
            count++;

            frequencyMap.set(s[beginningOfWindow], frequencyMap.get(s[beginningOfWindow]) - 1)
            if(frequencyMap.get(s[beginningOfWindow]) === 0 ){
                frequencyMap.delete(s[beginningOfWindow])
            }

            beginningOfWindow++
        }

        endOfWindow++
    }
    return count
};
