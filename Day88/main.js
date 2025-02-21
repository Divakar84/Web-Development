const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello  World!')
})

app.get('/about', (req, res) => {
  res.send('Hello I am about!')
})

app.get('/contact', (req, res) => {
  res.send('Hello I am contact!')
})

app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

/*app.get('/blog/intro-to-js', (req, res) => {
    // logic to fetch intro to js from the db
  res.send('Hello intor-to-js !')
})

app.get('/blog/intro-to-python', (req, res) => {
    // logic to fetch intro to python from the db
  res.send('Hello intor-to-python !')
})*/

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    console.log(req)
  res.send(`hello ${req.params.slug}`)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})