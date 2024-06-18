require('dotenv').config()
const express = require ('express')
const routes = require('./routes/routes')
const app = express()


app.use (express.static('public'))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use('/', routes)

app.listen(process.env.PORT, ()=> {
   console.log (`App rodando na porta ${process.env.PORT}`)
})