const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

//app.use(express.static("public"))

app.use('/blog', blog)


// Middleware 1 - Logger for our application
app.use((req, res, next) =>{
    console.log(req.headers)
    req.diva = 56;
    fs.appendFileSync("logs.txt", `${Date.now() } is a ${req.method}\n`)
    console.log(`${Date.now() } is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next()  
})


// Middleware 2
app.use((req, res, next) =>{
    console.log('m2 \n' + req.diva)
    req.diva = "I am Rohit bhai"
    next()  
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('Hello World! \n I am about')
})

app.get('/contact', (req, res) => {
  res.send('Hello World! \n I am contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})