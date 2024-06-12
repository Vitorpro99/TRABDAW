import conexao from '../config/conexao.js'

const Nota = conexao.Schema({
    aluno: [{
        type: 'String'
    }],
    curso: [{
        type: 'String'
    }],
    avaliacao: 'String',
    nota: [{
        type: 'Number'
    }]
})

export default conexao.model('Nota',Nota)