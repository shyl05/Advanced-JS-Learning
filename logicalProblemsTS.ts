// 1. Remove Duplicates
let arr1 = [0,0,1,1,1,2,2,3,3,4]
// let arr1  = [1,2,3,4,5]
// let arr1  = ['a','b','c','c','d','e','e','e']

// Way 1
function removeDuplicates<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}

console.log(removeDuplicates(arr1));

// Way 2
function removeDuplicates1<T>(arr: T[]): T[] {
    return arr.reduce((uniqueArr, currentItem) => {
        if (!uniqueArr.includes(currentItem)) {
            uniqueArr.push(currentItem);
        }
        return uniqueArr;
    }, [] as T[]);
}

console.log(removeDuplicates1(arr1));