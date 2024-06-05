import express from 'express';
const router = express.Router();

import { cadastro,lst,abreCadastro ,abreedt, filtro, edt, del } from '../controllers/alunocontroller.js';

router.get('/cadastro', abreCadastro)
router.post('/cadastro', cadastro)

router.get('/lst', lst)
router.post('/lst', filtro)

router.get('/del', del)

export default router;
