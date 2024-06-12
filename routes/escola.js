import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest: './public/foto'
})


import { cadastro, abreCadastro, abreCadastroAl, cadastroAl, telaInicio } from '../controllers/alunocontroller.js';
router.get('/', telaInicio)
router.get('/cadastro', abreCadastro)
router.post('/cadastro', foto.single('foto'), cadastro)


router.post('/cadastroAl', foto.single('foto'), cadastroAl)

export default router;
