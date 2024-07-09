import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})
import passport from '../config/passport.js';


import { telaInicio,abreLogin,login } from '../controllers/controller.js';

//Tela Inicial
router.get('/', telaInicio)

//Login
router.get('/login',abreLogin)
router.post('/login',passport.authenticate('local', {
    successRedirect: '/escola/lst',
    failureRedirect: '/escola/'
}))
export default router

