const express = require('express')
const app = express()
const port = 3000

/*
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.get('/user', (req, res) => {
    res.send('Hello User!')
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
*/

app.use(express.json())

let num1 = 2
let num2 = 3

app.get('/soma', (req, res) => {
    res.send(`${num1} + ${num2} = ${num1+num2}`)
})

app.get('/sub', (req, res) => {
    res.send(`${num1} - ${num2} = ${num1-num2}`)
})

app.get('/mult', (req, res) => {
    res.send(`${num1} * ${num2} = ${num1*num2}`)
})

app.get('/div', (req, res) => {
    res.send(`${num1} / ${num2} = ${num1/num2}`)
})

app.post("/soma", (req, res) => {
    const {numero1, numero2} = req.body
    res.send(numero1+numero2)
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})