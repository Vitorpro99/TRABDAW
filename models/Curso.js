import conexao from '..config/conexao.js'


const Curso = conexao.Schema({
    nome: 'String',
    descricao: 'String',
    duracao: 'Number',
    usuario: [{
        type: 'String'
    }]
})

export default conexao.model('Curso',Curso)