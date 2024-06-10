import express from 'express';
const router = express.Router();
import multer from 'multer';
const foto = multer({
    dest:'./public/foto'
})


import { cadastro, lst, abreCadastro, abreedt, filtro, edt, del } from '../controllers/alunocontroller.js';

router.get('/cadastro', abreCadastro)
router.post('/cadastro',foto.single('foto'), cadastro)

router.get('/lst', lst)
router.post('/lst', filtro)

router.get('/del', del)

export default router;
