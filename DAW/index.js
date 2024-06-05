// const express = require('express');
import express from 'express'
import path from 'path'
import passport from 'passport';
import session from 'express-session';


const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(path.resolve(),'public')))


app.post('/pesquisar',(req,res)=>{
    res.send("Dados recebidos: "+ req.body.nome)
})
app.post('/calculadora',(req,res)=>{
    const op = req.body.op
    let resultado;
    switch(op){
        case 'soma':
        resultado = parseInt(req.body.num1) + parseInt(req.body.num2)
        break;
        
        case 'sub':
        resultado = parseInt(req.body.num1) - parseInt(req.body.num2)
        break;

        case 'mult':
            resultado = parseInt(req.body.num1) * parseInt(req.body.num2)
            break;
        
        case 'div':
            resultado = parseInt(req.body.num1) / parseInt(req.body.num2)
            break;
    }
    res.render('form',{op:op,resultado:resultado})
    // res.send(`O resultado é ${resultado}`)
})
app.post('/tabela',(req,res)=>{
    console.log(req.body)
    var linhas = req.body.linhas
    var colunas = req.body.colunas
    res.render('tabela',{linhas:linhas,colunas:colunas})
})
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({extended: true}))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(path.resolve(), 'public')))

import router from './routes/routes.js'
app.use(router)
app.listen(port)