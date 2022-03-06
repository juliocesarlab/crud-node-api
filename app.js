
import express from 'express'
import cors from 'cors'

import { clientsRouter } from './routes.js'

import { db } from './database/connection.js'

//app config
const port = process.env.PORT || 4000
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//routes
app.use(clientsRouter)


app.listen(4000, () => console.log("server is running on port 4000"))

//database connect
db.connect();