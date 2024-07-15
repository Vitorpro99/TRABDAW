import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})


import {cadastraNota,abreCadastroNota, lst, lstCursos, lstNota, perfil,editaprofe,editarprof } from '../controllers/alunocontroller.js';

router.get('/cadastroNota',abreCadastroNota)
router.post('/cadastroNota',cadastraNota)

//Lista de Alunos
router.get('/lst', lst); 
router.get('/lstCursos', lstCursos)
router.get('/lstNota/:id', lstNota)
router.get('/editarprofessor/:id',editarprof)
router.post('/editarprofessor/:id',editaprofe)

router.get('/perfil', perfil)
export default router;