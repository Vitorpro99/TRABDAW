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
        matricula: "PR" + "-" + mat,
        foto: req.file.filename,
        senha: req.body.senha,
        admin: req.body.admin=="admin"?true:false
    })
    await usuario.save()
    console.log(usuario.matricula)
}
