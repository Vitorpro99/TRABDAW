import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})


import {cadastraNota,abreCadastroNota, cadastro, abreCadastro, abreCadastroAl,abreCadastroCurso, cadastroAl,cadastraCurso,delAl,lstCursos,lst } from '../controllers/admcontroller.js';

//Cadastro Prof
router.get('/cadastro', abreCadastro)
router.post('/cadastro', foto.single('foto'), cadastro)

//cadastro Aluno
router.get('/cadastroAl',abreCadastroAl)
router.post('/cadastroAl', foto.single('foto'), cadastroAl)

//Cadastro dos cursos
router.get('/cadastroCurso',abreCadastroCurso)
router.post('/cadastroCurso',cadastraCurso)

router.get('/cadastroNota',abreCadastroNota)
router.post('/cadastroNota',cadastraNota)

router.get('/delAl/:id', delAl)

//Lista de Alunos
router.get('/lst', lst); 
router.get('/lstCursos', lstCursos)

export default router;
