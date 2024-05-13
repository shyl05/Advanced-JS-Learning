// Curring:

// A functional programming technique that involves breaking down a function that takes multiple arguments
// into a series of functions that take one argument each.

// Basic Example:

function multiply(a, b, c){
    return a * b * c;
}

function basicCurry(callback){
    return function(val1){
        return function(val2) {
            return function(val3){
                return callback(val1, val2, val3);
            }
        }
    }
}

const curriedBasic = basicCurry(multiply);

console.log(curriedBasic(1)(2)(3));

// Advanced Currying:

function advancedCurry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

const curriedAdvanced = advancedCurry(multiply);

console.log(curriedAdvanced(2)(4)(6));
console.log(curriedAdvanced(2,4)(6));
console.log(curriedAdvanced(2)(4,6));
console.log(curriedAdvanced(2,4,6));