import Usuario from '../models/usuario.js'
import Post from '../models/Post.js'
export function abrirIndex(req,res){
    res.render('index')
}


export function cadastraUsuario(req,res){
    res.render('cadastro')
}
export async function cadastro(req,res){
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.file.filename,
        datanasc: req.body.datanasc
    })

    console.log(usuario)

    await usuario.save()
}
export async function mostrausuarios(req,res){
    let usuarios = await Usuario.find({})
    res.render('mostrausuarios',{Usuarios:usuarios})
}
export async function buscarusuarios(req,res){
    let usuarios = await Usuario.find({nome:req.body.pesquisar})
    res.render('mostrausuarios',{Usuarios:usuarios})
}
export function renderPesquisa(req,res){
    res.render('pesquisausuario')
}

export async function pesquisausuario(req,res){
    let usuarios_temp = await req.body.user
    let usuarios = await Usuario.find({usuarios_temp})
    res.render('pesquisausuario',{Usuarios:usuarios})
}

export async function abretelaeditar(req,res){
    let usuario = await Usuario.findById(req.params.id)
    res.render('editarusuario',{Usuario:usuario})
}

export async function editarusuario(req,res){
    let usuario = await Usuario.findById(req.params.id)
    usuario.nome = req.body.nome
    usuario.email = req.body.email
    usuario.senha = req.body.senha
    usuario.datanasc = req.body.datanasc
    await usuario.save()
    res.redirect('/mostrausuarios')
}
export async function deletausuario(req,res){
   let usuario = await Usuario.findByIdAndDelete(req.params.id)
   res.redirect('/mostrausuarios')
}
export async function abrelogin(req, res){
    res.render('login.ejs')
}
export async function abrepost(req,res){
    res.render('post.ejs')
}
export async function post(req,res){
    
    const post = new Post({
        titulo: req.body.titulo,
        texto: req.body.texto,
        tags: req.body.tags.split(';'),
        foto: req.file.filename,
        data: req.body.data,
        status: req.body.status
    })

    console.log(post)
    await post.save()
    res.render('post.ejs')

}
export async function postlist(req,res){
    let posts = await Post.find({})
    res.render('lstpost',{Posts:posts})
}
export async function pesquisapost(req,res){
    let posts = await Post.find({titulo:req.body.pesquisar})
    res.render('lstpost',{Posts:posts})
}
export async function deletapost(req,res){
    let post = await Post.findByIdAndDelete(req.params.id)
    res.redirect('/postlist')
 }
export async function abretelaeditarpost(req,res){
    let post = await Post.findById(req.params.id)
    res.render('postedit',{Post:post})
}
export async function editapost(req,res){
    let post = await Post.findById(req.params.id)
    post.titulo = req.body.titulo,
    post.texto = req.body.titulo,
    post.tags = req.body.tags.split(';'),
    post.foto = req.file.filename
    post.data = req.body.data
    
    await post.save()
    res.redirect('/lstpost')
}
    // Usuario.save(err,result)=>{
    //     if(err){

    //     }else{
    //         res.render('mostrardados', {nome:req.body.nome,email:req.body.email,foto:req.file.filename})
    //     }
    // }
