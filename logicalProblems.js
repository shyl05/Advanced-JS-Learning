// 1. Given the following array: [2,3,4,5,7]
//    Perform 3 right rotations:
//    First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
//    return [4,5,7,2,3]

const arr = [2,3,4,5,7];

function rotate(arr, rot){
    let len = arr.length;
    for(let i = 0; i<rot; i++){
        arr.unshift(arr[len-1]);
        arr.pop();
    }
    console.log("New Arr",arr);
}

rotate(arr, 3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a function to find the longest common prefix string amongst an array of strings.
//    If there is no common prefix, return an empty string "".
 
// Example 1:
// Input: strs = ["flower","flow","flight"]Output: "fl"
// Example 2:
// Input: strs = ["dog","racecar","car"]Output: ""Explanation: There is no common prefix among the input strings.

function lgCommonPrefix(strs){
    if (strs.length === 0) {
        return "no input";
    }
 
    let prefix = strs[0];
 
    for (let word of strs) {
        while (word.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === '') return 'no common prefix'
        }
    }
    return prefix;
}

console.log(lgCommonPrefix(["flower","fear","flight"]))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Global Scope Problems

(function() {
    var a = b = 5;
    console.log('a', a)
    console.log('b-inner', b) // prints 5
})();
  
console.log('b-outer', b); // prints 5

// Here's what's happening step by step:

// 1. The function creates a local variable a and assigns it the value of b = 5.
// 2. b = 5 is actually shorthand for window.b = 5 (in a browser environment) 
//    since b wasn't declared with var, let, or const.
// 3. After the function executes, b is still accessible globally, hence console.log(b) logs 5.

// function abc() {
//     var a = b = 5;
//     console.log(a);
//     //console.log(b);
// }

// abc();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4. var as Global scope and setTimeout():

for (var i = 0; i < 3; i++) {
    setTimeout(function() { 
        console.log(i); // prints 3 thrice why ?
    }, 1000 + i);
}

// In this code snippet, you're using setTimeout inside a loop. 
// The setTimeout function executes its callback function asynchronously after a specified delay (in milliseconds).
// However, by the time the callback function is executed, the loop has already completed, 
// and the variable i has reached its final value, which is 3.
// Since JavaScript has function-level scope (and not block-level scope for variables declared with var), 
// there's only one i variable shared among all the iterations of the loop.
// So when the callback functions execute after the timeout, they all reference the same i, 
// which has already been incremented to 3 by the time the loop ends. That's why you see 3 printed three times.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Longest increasing sequence:

// Array of positive Integers stored in arr and return the length of the longest increasing subsequence(LIS).
// A LIS is a subset of the original list where the numbers are in sorted order, from lowest to highest, 
// and are in increasing order. 
// The sequence does not need to be contiguous or unique, and there can be several different subsequences. 
// For example: if arr is [4, 3, 5, 1, 6) then a possible LIS is [3, 5, 6], and another is [16].
// For this input, your program should return 3 because that is the length of the longest increasing subsequence.

function LongestIncreasingSequence(arr) {
    if (arr.length === 0) return 0;

    const dp = new Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

// Examples
console.log(LongestIncreasingSequence([4, 3, 5, 1, 6])); // Output: 3
console.log(LongestIncreasingSequence([9, 9, 4, 2])); // Output: 1

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////