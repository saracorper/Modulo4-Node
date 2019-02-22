'use strict';


function sum(n1,n2){
    return n1 + n2;
}//Sumar

function substract(n1,n2){
    return n1 - n2;
} //Restar

function mul(n1,n2){
    return new Promise((resolve) =>{
        setTimeout(()=> {
            return resolve(n1 * n2);
        }, 1000);
    });
}

async function div(n1,n2){
    if(n2 ===0){
        throw new Error('not a valid div');
    }

    return n1 / n2
}

module.exports = {
    sum,
    substract,
    mul,
    div
}


// console.log(sum(2,2));
// console.log(substract(2,2));
// console.log(div(10,2));
// console.log(mul(5,2));





