/*

create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input form the user
2. It performs wrong operations as follows:
 
+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operations 10% of the times.

*/

let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operations")
let b = prompt("Enter second number")
console.log(a, b, c)

let obj = {
    "+" : "-" ,
    "*" : "+" ,
    "-" : "/" ,
    "/" : "**"
}



if(random > 0.1){
    // Perform correct calculations
     console.log(`The result is ${eval(`(${a} ${c} ${b})`)}`)
     alert(`The result is ${eval(`(${a} ${c} ${b})`)}`)


}

else{
    // Perform wrong calculations
    c = obj[c]
    console.log(`The result is ${eval(`(${a} ${c} ${b})`)}`)
    alert(`The result is ${eval(`(${a} ${c} ${b})`)}`)
}