import conexao from '../config/conexao.js'

const Professor = conexao.Schema({
    nome:'String',
    email:{
        type:'String',
    },
    matricula:{ 
        type: 'String',
    },
    foto:'String',
    senha:{
        type:'String'
    },
    admin:'Boolean'
})
export default conexao.model('Professor',Professor)