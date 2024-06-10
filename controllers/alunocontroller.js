import Usuario from '../models/Usuario.js'

export function abreCadastro(req, res) {
    res.render("cadastro.ejs")
}
export async function cadastro(req, res) {
    var mat = Math.floor(Math.random() * 100000000).toString()
    console.log(mat)
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        matricula: "AL" + "-" + mat,
        foto: req.file.filename,
        senha: req.body.senha
    })
    await usuario.save()
    console.log(usuario.matricula)
}
export function lst(req, res) {

}
export function filtro(req, res) {

}
export function abreedt(req, res) {

}
export function edt(req, res) {

}
export function del(req, res) {

}