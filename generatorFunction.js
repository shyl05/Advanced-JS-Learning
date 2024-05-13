// Generator Functions:

// A generator-function is defined like a normal function, but whenever it needs to generate a value,
// it does so with the yield keyword rather than return. The yield statement suspends the function’s 
// execution and sends a value back to the caller, but retains enough state to enable the function to
// resume where it is left off. When resumed, the function continues execution immediately after the last yield run.

// Example:

function* fun() { 
    yield 10; 
    yield 20; 
    yield 30; 
} 
  
// Calling the Generate Function 
let gen = fun(); 
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value);

// 1. yield: pauses the generator execution and returns the value of the expression which is being written after the yield keyword.
// 2. yield*: it iterates over the operand and returns each value until done is true.

const arr = ['a', 'b', 'c']; 
 
// Example:

function* generator() { 
    yield 1; 
    yield* arr; 
    yield 2; 
} 
  
for (let value of generator()) { 
    console.log(value); 
}