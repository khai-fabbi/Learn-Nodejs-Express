import express from 'express'

import configViewEngine from './config/viewEngine'
import initWebRoutes from './routes/web'
require('dotenv').config()
import bodyParser from 'body-parser'
import initialRouteApi from './routes/api'

const app = express()
const PORT = process.env.PORT || 8080

// config view engine :
configViewEngine(app)

// config body parser :
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// router
initialRouteApi(app)
initWebRoutes(app)

app.listen(PORT, () => console.log('Backend is running on the port: ', PORT))
