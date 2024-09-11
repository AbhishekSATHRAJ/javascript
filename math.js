// [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()

let arr= [12.345, 67.890, 34.567]
let arr2=arr.map(function(a){
    return a.toFixed(2)
})
console.log(arr2)

// ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()


let a=['123abc', '456def', '789ghi']
let b=a.map(function(a){
    return parseInt(a)
})
console.log(b)


// [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()


let f=[12, 34.56, 78, 90.12]
let g=f.map(function(a){
    return Number.isInteger(a)
})
console.log(g)
// ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()


let h=['abc', 123, 'def', 456]
let j=h.map(function(a){
    return isNaN(a)
})
console.log(j)



// [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()

let k=[123.456, 789.012, 345.678]
let l=k.map(function(a){
    return a.toPrecision(4)
})
console.log(l)


// generate random otp 5 digit num using math.random


function generate(){
    let otplength=4;
    otp="";
    for(i=0;i<otplength;i++){
otp=otp+Math.floor(Math.random()*10)
    }
return otp
}
console.log(generate())