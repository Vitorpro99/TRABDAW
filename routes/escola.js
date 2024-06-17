import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})


import { cadastro, abreCadastro, abreCadastroAl, cadastroAl, telaInicio,abreLogin,login } from '../controllers/alunocontroller.js';
router.get('/', telaInicio)
router.get('/cadastro', abreCadastro)
router.post('/cadastro', foto.single('foto'), cadastro)
router.get('/cadastroAluno', abreCadastroAl)
router.post('/cadastroAluno', foto.single('foto'), cadastroAl)
router.get('/login',abreLogin)
router.post('/login',login)


router.get('/cadastroAl',abreCadastroAl)
router.post('/cadastroAl', foto.single('foto'), cadastroAl)

export default router;
