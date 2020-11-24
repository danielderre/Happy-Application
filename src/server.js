//import packages
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//initializing express
const server = express()
server
//utilizing requisition body
.use(express.urlencoded({extended: true}))

//utilizing static files 
server
.use(express.static('public'))

//configure template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//application routes
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)    

//activate server
server.listen(5500)