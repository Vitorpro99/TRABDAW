import express from 'express';
const app = express();
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))

import escola from './routes/escola.js'

app.use('/escola', escola)

app.listen(port)