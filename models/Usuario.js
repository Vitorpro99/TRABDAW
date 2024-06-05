import conexao from '..config/conexao.js'

const Usuario = conexao.Schema({
    nome:'String',
    email:{
        type:'String',
        required:true
    },
    matricula:{ 
        type: 'String',
    },
    foto:'String',
    senha:{
        type:'String'
    }
})
export default conexao.model('Usuario',Usuario)