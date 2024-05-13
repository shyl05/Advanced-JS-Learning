// Throttling:

// Throttling is a technique that limits how often a function can be called in a given period of time.

// Example: 

function throttle(Func, delay) {
    let timerFlag = null; // Variable to keep track of the timer
  
    // Returning a throttled version 
    return (...args) => {
        if (timerFlag === null) { // If there is no timer currently running
            Func(...args); // Execute the main function 
            timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
                timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
            }, delay);
        }
    };
}