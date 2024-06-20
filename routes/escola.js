import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})


import { cadastro, abreCadastro, abreCadastroAl, cadastroAl, telaInicio, abreLogin, login, lst } from '../controllers/alunocontroller.js';

//Tela Inicial
router.get('/', telaInicio)

//Cadastro Prof
router.get('/cadastro', abreCadastro)
router.post('/cadastro', foto.single('foto'), cadastro)

//Login
router.get('/login',abreLogin)
router.post('/login',login)

//cadastro Aluno
router.get('/cadastroAl',abreCadastroAl)
router.post('/cadastroAl', foto.single('foto'), cadastroAl)

//Lista de Alunos
router.get('/lst', lst);    

export default router;
