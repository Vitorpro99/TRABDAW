import express from 'express'
// import {abrirCadastro,abrirtela,cadastro,abrirIndex, abrirCalculadora,upload, abrirTabela,nome,soma, calculadora,abreUpload, gerarTabela, nomesobre, pesquisar, vitor } from '../controllers/controllers.js'
import {abrelogin,postlist,abrepost,abretelaeditarpost,editapost,deletapost,pesquisapost,post,cadastraUsuario,cadastro,mostrausuarios,pesquisausuario,renderPesquisa,buscarusuarios,abretelaeditar,editarusuario, deletausuario} from '../controllers/controllers.js'
import autenticacao from '../config/autenticacao.js'
import passport from '../config/passport.js';
const router = express.Router()

import multer from 'multer'
const foto = multer({dest:'./public'})


router.get('/usuario',autenticacao,cadastraUsuario)
router.post('/usuario',autenticacao,foto.single('foto'),cadastro)

router.get('/mostrausuarios',autenticacao, mostrausuarios)
router.post('/mostrausuarios',autenticacao, buscarusuarios)

router.get('/pesquisausuario',renderPesquisa)
router.post('/pesquisausuario',pesquisausuario)

router.get('/editarusuario/:id',autenticacao,abretelaeditar)
router.post('/editarusuario/:id',autenticacao,editarusuario)

router.get('/postedit/:id',autenticacao,abretelaeditarpost)
router.post('/postedit/:id',autenticacao,editapost)

router.get('/post',autenticacao,abrepost)
router.post('/post',autenticacao,foto.single('foto'),post)

router.get('/postlist',autenticacao,postlist)
router.post('/postlist',autenticacao,pesquisapost)

router.get('/deletausuario/:id',autenticacao,deletausuario)
router.get('/deletapost/:id',autenticacao,deletapost)


//rota para abrir a tela de login
router.get('/', abrelogin)

router.post('/', passport.authenticate('local', {
    successRedirect: '/usuario',
    failureRedirect: '/'
}));
// router.get('/cadastro',abrirCadastro)
// router.post('/cadastro',foto.single('foto'),cadastro)

// router.get('/',abrirIndex)

// router.get('/tabela',abrirTabela)

// router.get('/calculadora',abrirCalculadora)

// router.get('/vitor',vitor)

// router.get('/upload',abreUpload)
// router.post('/upload',foto.single('foto'),upload)

// router.get('/:nome',nome)
// router.get('/:nome/:sobrenome',nomesobre)
// router.get('/:soma/:var1/:var2',soma)

// router.post('/pesquisar',pesquisar)
// router.post('/calculadora',calculadora)
// router.post('/tabela',gerarTabela)

export default router