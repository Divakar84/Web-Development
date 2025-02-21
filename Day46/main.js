const fs = require("fs")

console.log("starting")
//fs.writeFileSync("divakar.txt", "Divakr is a good boy")

fs.writeFile("Divakar2.txt", "Divakar is a good boy 2", ()=>{
    console.log("done") 
    fs.readFile("Divakar2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("Divakar.txt","Divakar robo ", (e, d)=>{
    console.log(d)
})
console.log("ending")