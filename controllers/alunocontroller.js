import Usuario from '../models/Usuario.js'
import Aluno from '../models/Aluno.js'

export function abreCadastro(req, res) {
    res.render("cadastro.ejs")
}
export async function cadastro(req, res) {
    var mat = Math.floor(Math.random() * 100000000).toString()
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        foto: req.file.filename,
        senha: req.body.senha,
        admin: req.body.admin == "admin" ? true : false
    })
    await usuario.save()
    console.log(usuario.matricula)
}

export function abreCadastroAl(req, res) {
    res.render("cadastroAluno.ejs")
}

export async function cadastroAl(req, res) {
    var mat = Math.floor(Math.random() * 100000000).toString()
    const aluno = new Aluno({
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        foto: req.file.filename,
    })
    await aluno.save()
    console.log(aluno.matricula)
}


