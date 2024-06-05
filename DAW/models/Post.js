import conexao from '../config/conexao.js'

const Post = conexao.Schema({
    titulo:'String',
    texto:'String',
    tags:['String'],
    foto:'String',
    data:'date',
    status:'String',

})
export default conexao.model('Post',Post)