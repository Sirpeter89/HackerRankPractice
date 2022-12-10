//Problem
// 2269. Find the K-Beauty of a Number
// Easy
// 357
// 21
// Companies
// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.



// Example 1:

// Input: num = 240, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "24" from "240": 24 is a divisor of 240.
// - "40" from "240": 40 is a divisor of 240.
// Therefore, the k-beauty is 2.
// Example 2:

// Input: num = 430043, k = 2
// Output: 2
// Explanation: The following are the substrings of num of length k:
// - "43" from "430043": 43 is a divisor of 430043.
// - "30" from "430043": 30 is not a divisor of 430043.
// - "00" from "430043": 0 is not a divisor of 430043.
// - "04" from "430043": 4 is not a divisor of 430043.
// - "43" from "430043": 43 is a divisor of 430043.
// Therefore, the k-beauty is 2.


// Constraints:

// 1 <= num <= 109
// 1 <= k <= num.length (taking num as a string)


//mySolution:

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function(num, k) {
    //k covers the whole number, the number is divisable by itself
    if (k === num.toString().length){
        return 1;
    }

    //sliding window technique

    //we need a count variable to keep track of k-beauty
    let count = 0;
    //convert number toString so we can iterate through it
    let iterableNum = num.toString();
    //start with 1 pointer at the beginning of the number
    let pointer = 0;
    //while our pointer is less than the length of our number string - k: O(n)
    while(pointer <= iterableNum.length - k){
        //get substring from beginning pointer to beginning pointer + k
        let substring = iterableNum.substring(pointer, pointer + k);
    //convert our current string to a number
        let subNumber = parseInt(substring);
    //check if num mod our current string is 0 (see if it's divisable)
        if( num % subNumber === 0){
            //if it is increment count
            count++;
        }
    //increment beginning pointer by 1
        pointer++;
    }
    return count;
};
