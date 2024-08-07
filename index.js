import express from 'express';
import path from 'path';
import passport from 'passport';
import session from 'express-session';


const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static(path.join(path.resolve(), 'public')))

app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

import autenticacaoadmin from './config/autenticacaoadmin.js';
import autenticacaousuario from './config/autenticacaousuario.js';

import escola from './routes/escola.js'
import adm from './routes/adm.js'
import usuarioroute from './routes/usuarioroute.js'

app.use('/escola', escola)
app.use('/admin',autenticacaoadmin,adm)
app.use('/user',autenticacaousuario,usuarioroute)

app.listen(port)