const obj = {
    name: 'John',
    age: 25,
}

Object.prototype.myFunc = function(callback){
    console.log(this.name+' '+this.age);
    return this.name+' '+this.age
}

myFunc(obj)