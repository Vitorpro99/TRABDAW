import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest:'./public/foto'
})


import { cadastro, abreCadastro } from '../controllers/alunocontroller.js';

router.get('/cadastro', abreCadastro)
router.post('/cadastro',foto.single('foto'), cadastro)
export default router;
