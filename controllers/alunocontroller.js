import Usuario from '../models/Usuario.js'
import Aluno from '../models/Aluno.js'


export function telaInicio(req,res) {
    res.render('tela.ejs')
}

export function abreCadastro(req, res) {
    res.render("cadastro.ejs")
}
export async function cadastro(req, res) {
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
    const aluno = new Aluno({
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        foto: req.file.filename,
    })
    await aluno.save()  
    console.log(aluno.matricula)
}

export function abreLogin(req,res){
    res.render("login.ejs")
}
export function login(req,res){
    res.render("lst.ejs")
}

export async function lst(req,res) {
    const alunos = await Aluno.find(); // Busca todos os alunos do banco de dados
    res.render('lst.ejs', { alunos }); // Renderiza a página ejs com os alunos encontradoss
}


