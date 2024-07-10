import conexao from '../config/conexao.js'

const Nota = conexao.Schema({
    aluno: {
        type: 'String'
    },
    curso:'String',
    avaliacao: 'String',
    nota:'Number'
})

export default conexao.model('Nota',Nota)