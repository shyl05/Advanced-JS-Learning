// Polyfill:

// A piece of code called polyfill is used to add support for more recent features in earlier 
// browsers that don't already have native support for them.

// 1. Polyfill for map():

Array.prototype.myMap = function(callback){
    let temp=[];
    for(let i=0 ; i<this.length ; i++)
    {
        temp.push(callback(this[i],i,this));
    }
    return temp;
};

// 2. Polyfill for filter():

Array.prototype.myFilter=function(callback){
    let temp=[];
    for(let i=0 ; i<this.length ; i++)
    {
        if(callback(this[i],i,this)){
            temp.push(this[i]);
        }
    }
    return temp;
}

// 3. Polyfill for reduce():

Array.prototype.myReduce=function(callback,initialValue){
    var accumulator = initialValue;
    for(let i=0 ; i<this.length ; i++)
    {
        accumulator = accumulator ? callback(acc,this[i],i,this) : this[i];
    }
    return acc;
}

Array.prototype.newReduce = function (callback, initialValue){
    var accumulator = initialValue === undefined ? undefined : initialValue;

    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }
    return accumulator;
}

// 4. Polyfill for forEach():

Array.prototype.myForEach = function(callbackFn, context) {

    for (var i = 0; i < this.length; i++) { 
       /* call the callback function for every value of this array with the context provided
       */
      callbackFn.call(context, this[i], i, this);
    }
}
// OR //
Array.prototype.ourForEach = function (callBack) {
    for (let i = 0; i < this.length; i++) {
      callBack(this[i]);
    }
};

// 5. Polyfill for Call():

Function.prototype.myCall= function (context,...args){
    if(typeof this !=="function"){
        throw new Error(this,"invalid call")
    }
    context.fnc = this;
    context.fnc(...args);
}
// OR //
Function.prototype.myCall= function (callback){
    if(typeof this !=="function"){
        throw new Error(this,"invalid call")
    }

    callback = this;
    context();
}

// 6. Polyfill for Apply():

Function.prototype.myApply= function (context,args){
    if(typeof this !=="function"){
        throw new Error(this,"invalid call")
    }
    if(!Array.isArray(args)){
        throw new TypeError("arguments are not in array")
    }
    context.fnc = this;
    context.fnc(...args);
}

// 7. Polyfill for Bind():

Function.prototype.myBind= function (context,args){
    if(typeof this !=="function"){
        throw new Error(this,"invalid call")
    }
    
    context.fnc = this;
    return function (...nextargs){
        context.fnc(...args,...nextargs);
    }
}