//task1
export function add(a,b){
    return a+b;
}

//task2 
let Person="anubhav";

export {Person}

//task3
function mul(a,b){
    return a*b
}

function newfn(a) {
    return 2*a
}

export{
    mul as multy,newfn as newfn1,lodash1
}

//task4

export default function add2(a){
    return 2+a;
}

//task6

 function lodash1(){
    const _ = require('lodash');

    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const chunkedArray = _.chunk(array, 3);

    console.log(chunkedArray); // Output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
}