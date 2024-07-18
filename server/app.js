require('dotenv').config()
const express = require('express')
const http = require('http')
const app = express()

const PORT = process.env.PORT || 3000

const indexRouter = require('./routes/index.routes')
const serverConfig = require('./config/serverConfig')
const initializeSocket = require('./socket/socketConnect')
serverConfig(app)

app.use('/api', indexRouter)

const server = http.createServer(app)
initializeSocket(server)

server.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`)
})
