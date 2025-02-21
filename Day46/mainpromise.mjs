import fs from "fs/promises"

let a = await fs.readFile("Divakar.txt")

let b = await fs.appendFile("Divakr.txt", "\n\n\n\n\n\n\n\n\n\n\n\nthis is amazing promise")

console.log(a.toString(), b)