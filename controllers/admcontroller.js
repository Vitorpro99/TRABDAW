import Professor from "../models/Professor.js";
import Aluno from "../models/Aluno.js";
import Curso from "../models/Curso.js";
import Nota from "../models/Nota.js";

export function abreCadastro(req, res) {
    res.render("cadastro.ejs");
}
export async function cadastro(req, res) {
    const professor = new Professor({
        nome: req.body.nome,
        email: req.body.email,
        matricula: req.body.matricula,
        foto: req.file.filename,
        senha: req.body.senha,
        admin: req.body.admin == "admin" ? true : false,
    });
  await professor.save();
  console.log(professor.matricula);
  res.redirect("/admin/cadastros");
}

export async function abreCadastroAl(req, res) {
  const cursos = await Curso.find();
  res.render("cadastroAluno.ejs", { cursos });
}

export async function cadastroAl(req, res) {
  const aluno = new Aluno({
    nome: req.body.nome,
    email: req.body.email,
    matricula: req.body.matricula,
    foto: req.file.filename,
  });
  await aluno.save();
  console.log(aluno.matricula);
  res.redirect("/admin/cadastros");
}

export async function lst(req, res) {
  const professor = await Professor.findById(req.user.id);
  const alunos = await Aluno.find(); // Busca todos os alunos do banco de dados
  res.render("lstadm.ejs", { alunos, professor: professor }); // Renderiza a página ejs com os alunos encontradoss
}

export async function abreCadastroCurso(req, res) {
  const professors = await Professor.find(); //Busca os professores
  res.render("cadastroCurso.ejs", { professors }); // Renderiza com os professores achados
}

export async function cadastraCurso(req, res) {
  const curso = new Curso({
    nome: req.body.nome,
    cursoid: req.body.cursoid,
    duracao: req.body.duracao,
    descricao: req.body.descricao,
    professor: req.body.professor,
  });
  await curso.save();
  res.redirect("/admin/cadastros");
}
export async function abreCadastroNota(req, res) {
  const alunos = await Aluno.find();
  const cursos = await Curso.find();
  res.render("cadastroNota.ejs", { cursos, alunos });
}
export async function cadastraNota(req, res) {
  const nota = new Nota({
    aluno: req.body.aluno,
    avaliacao: req.body.avaliacao,
    curso: req.body.curso,
    nota: req.body.nota,
  });
  await nota.save();
}

export async function delAl(req, res) {
  await Aluno.findByIdAndDelete(req.params.id);
  res.redirect("/admin/lst");
}

export async function lstCursos(req, res) {
  const professor = await Professor.findById(req.user.id);
  const cursos = await Curso.find(); // Busca todos os cursos do banco de dados
  res.render("lstCursos.ejs", { cursos, professor: professor }); // Renderiza a página ejs com os cursos encontrados
}
export async function lstNota(req, res) {
  const professor = await Professor.findById(req.user.id);
  const nota = await Nota.find(); // Busca todos os cursos do banco de dados
  res.render("lstNota.ejs", { nota, professor: professor }); // Renderiza a página ejs com os cursos encontrados
}

export function lstCadastro(req, res) {
  res.render("cadastros.ejs");
}
