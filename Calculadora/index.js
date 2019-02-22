"use strict";
const calculadora = require("./calculadora");

const { substract, mul, div } = calculadora;

const resultSum = calculadora.sum(5, 3);

const resultSubstract = calculadora.substract(5, 3);

console.log(`resultSum:${resultSum}`);
console.log("resultSum", resultSum);
console.log(`resultSubstract: ${resultSubstract}`);

mul(3, 4).then(resultMul => {
    console.log("resultMul:", resultMul);
  }).catch(err => {
    console.error("errorMul", err);
});

// div Asimcrona
async function startDiv() {
    try{
        const resultDiv = await div(6,2);
        console.log(`resultDivAsync: ${resultDiv}`);
    }catch(err){
        console.error('error resultDivAsync', err);
    }
}

startDiv();

//Div promise
div(4, 2).then((resultDiv)=> {
    console.log('resultDiv', resultDiv);
}).catch((err)=> {
    console.error('resultDiv', err);
});



