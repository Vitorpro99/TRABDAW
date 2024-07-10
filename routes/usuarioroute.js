import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})


import {cadastraNota,abreCadastroNota, lst, lstCursos, lstNota, perfil } from '../controllers/alunocontroller.js';

router.get('/cadastroNota',abreCadastroNota)
router.post('/cadastroNota',cadastraNota)

//Lista de Alunos
router.get('/lst', lst); 
router.get('/lstCursos', lstCursos)
router.get('/lstNota', lstNota)

router.get('/perfil', perfil)
export default router;