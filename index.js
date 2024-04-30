import express from 'express'

const port = 4000

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})