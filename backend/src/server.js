const app = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 3333

const server = () => console.log(`Server running or port ${PORT}`)

app.listen(PORT, server)