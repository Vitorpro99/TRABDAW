export function abreCadastro(req, res) {
    res.render("cadastro.ejs")
}
export function cadastro(req, res) {
    var mat = Math.floor(Math.random() * 100000000).toString()
    console.log(mat)
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        matricula: mat,
        foto: req.file.filename,
        senha: req.body.senha
    })
    usuario.save()
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