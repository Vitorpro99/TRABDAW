import Professor from '../models/Professor.js'
import Aluno from '../models/Aluno.js'
import Curso from '../models/Curso.js'
import Nota from '../models/Nota.js'

export function telaInicio(req,res) {
    res.render('tela.ejs')
}

export function abreCadastro(req, res) {
    res.render("cadastro.ejs")
}
export async function cadastro(req, res) {
    const professor = new Professor({
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        foto: req.file.filename,
        senha: req.body.senha,
        admin: req.body.admin == "admin" ? true : false
    })
    await professor.save()
    console.log(Professor.matricula)
}

export async function abreCadastroAl(req, res) {
    const cursos = await Curso.find()
    res.render("cadastroAluno.ejs", { cursos })
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

export async function abreCadastroCurso(req,res){
    const professors = await Professor.find(); //Busca os professores
    res.render("cadastroCurso.ejs", {professors}); // Renderiza com os professores achados
}

export async function cadastraCurso(req,res){
    const curso = new Curso({
        nome: req.body.nome,
        cursoid: req.body.cursoid,
        duracao: req.body.duracao,
        descricao: req.body.descricao,
        professor: req.body.professor  
    })
    await curso.save()
}
export async function abreCadastroNota(req,res){
    const alunos = await Aluno.find()
    const cursos = await Curso.find()
    res.render('cadastroNota.ejs', { cursos,alunos })
}
export async function cadastraNota(req,res){
    const nota =  new Nota({
        aluno: req.body.aluno,
        avaliacao: req.body.avaliacao,
        curso: req.body.curso,
        nota: req.body.nota
    })
    await nota.save()
}

