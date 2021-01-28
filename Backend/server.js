const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const path = require('path')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 5000;
/** IMPORTING FILES **/
const Routes  = require('./Routes/Routes')

//link the config.env
dotenv.config({ path: './Config/config.env'})

//link morgan 
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(express.json())

//include body-parser
app.use(bodyparser.urlencoded({extended:true}))

/** static file **/
app.use(express.static(path.join(__dirname,'public')))


/************************ Api Routes ***************/


//  /api/v1 for project routes 
app.use('/api/', Routes)

/***************************************/


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode at port: ${PORT}`.yellow.bold))