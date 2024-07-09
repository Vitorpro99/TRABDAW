import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})


import {cadastraNota,abreCadastroNota, lst, lstCursos } from '../controllers/alunocontroller.js';

router.get('/cadastroNota',abreCadastroNota)
router.post('/cadastroNota',cadastraNota)

//Lista de Alunos
router.get('/lst', lst); 
router.get('/lstCursos', lstCursos)
export default router;