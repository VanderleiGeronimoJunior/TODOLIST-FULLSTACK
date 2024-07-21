const express = require('express')

const app = express()

app.get('/', (req, res) => res.status(200).send('Olá, Mundo'))


const server = () => console.log('Server running or port 3333')

app.listen(3333, server)