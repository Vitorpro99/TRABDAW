import Professor from '../models/Professor.js'
import Aluno from '../models/Aluno.js'
import Curso from '../models/Curso.js'
import Nota from '../models/Nota.js'

export async function lst(req,res) {
    const alunos = await Aluno.find(); // Busca todos os alunos do banco de dados
    res.render('lst.ejs', { alunos }); // Renderiza a página ejs com os alunos encontradoss
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

export async function lstCursos(req,res) {
    const cursos = await Curso.find(); // Busca todos os cursos do banco de dados
    res.render('lstCursos.ejs', { cursos }); // Renderiza a página ejs com os cursos encontrados
}
export async function lstNota(req,res) {
    const nota = await Nota.find(); // Busca todos os cursos do banco de dados
    res.render('lstNota.ejs', { nota }); // Renderiza a página ejs com os cursos encontrados
}
