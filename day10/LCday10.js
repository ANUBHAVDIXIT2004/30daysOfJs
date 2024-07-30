// LeetCode 2665 CounterII

var createCounter = function(init) {
    const initVal=init;
    const myObject={
        increment(){
            return ++init;
        },
        reset(){
            init=initVal;
            return init;
        },
        decrement(){
            return --init;
        }
    };
    return myObject;
};

//LeetCode 2635
var map = function(arr, fn) {
    for(let i=0;i<arr.length;i++)
    {
        arr[i]=fn(arr[i],i);
    }
    return arr;
};