import conexao from '../config/conexao.js'

const Usuario = conexao.Schema({
    nome:'String',
    email:{type:'String'
},
    senha:'String',
    foto:'String',
    admin:{
        type:'boolean',
    },
    curso: 'String',
    matricula: 'String'
})
export default conexao.model('Usuario',Usuario)