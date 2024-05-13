// Debouncing: 

// Debouncing is a way of delaying the execution of a function until a certain amount of time 
// has passed since the last time it was called. 

// Example:

const debounce = (mainFunction, delay) => {
    // Declare a variable called 'timer' to store the timer ID
    let timer;
  
    // Return an anonymous function that takes in any number of arguments
    return function (...args) {
      // Clear the previous timer to prevent the execution of 'mainFunction'
        clearTimeout(timer);
    
        // Set a new timer that will execute 'mainFunction' after the specified delay
        timer = setTimeout(() => {
            mainFunction(...args);
        }, delay);
    };
};