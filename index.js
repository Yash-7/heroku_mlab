const express = require('express');
const cool = require('cool-ascii-faces')
express()
    .get('/',(req,res)=>res.send('hi'))
    .get('/cool',(req,res)=>res.send(cool()))
    .listen(8080,()=>console.log('Server started'));