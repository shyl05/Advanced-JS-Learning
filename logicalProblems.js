// 1. Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
// return [4,5,7,2,3]

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
//If there is no common prefix, return an empty string "".
 
//Example 1:
//Input: strs = ["flower","flow","flight"]Output: "fl"
//Example 2:
//Input: strs = ["dog","racecar","car"]Output: ""Explanation: There is no common prefix among the input strings.

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