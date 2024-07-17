import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})

import autenticacaoadmin from '../config/autenticacaoadmin.js'
import {cadastraNota,abreCadastroNota, cadastro, abreCadastro, abreCadastroAl,abreCadastroCurso, cadastroAl,cadastraCurso,delAl,lstCursos,lst, lstNota, lstCadastro } from '../controllers/admcontroller.js';

//Lista de Cadastros
router.get('/cadastros', autenticacaoadmin, lstCadastro)

//Cadastro Prof
router.get('/cadastro',autenticacaoadmin, abreCadastro)
router.post('/cadastro', foto.single('foto'),autenticacaoadmin,cadastro)

//cadastro Aluno
router.get('/cadastroAl',abreCadastroAl)
router.post('/cadastroAl', foto.single('foto'),autenticacaoadmin,cadastroAl)

//Cadastro dos cursos
router.get('/cadastroCurso',autenticacaoadmin,abreCadastroCurso)
router.post('/cadastroCurso',autenticacaoadmin,cadastraCurso)

router.get('/cadastroNota',autenticacaoadmin,abreCadastroNota)
router.post('/cadastroNota',autenticacaoadmin,cadastraNota)

router.get('/delAl/:id',autenticacaoadmin,delAl)

//Lista de Alunos
router.get('/lst' ,autenticacaoadmin,lst); 
router.get('/lstCursos',autenticacaoadmin, lstCursos)

//Lista de Notas
router.get('/lstNota',autenticacaoadmin, lstNota)

export default router;
