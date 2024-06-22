import conexao from '../config/conexao.js'


const Curso = conexao.Schema({
    nome: 'String',
    descricao: 'String',
    cursoid:'String',
    duracao: 'Number',
    professor: [{
        type: 'String'
    }]
})

export default conexao.model('Curso',Curso)