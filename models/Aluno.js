import conexao from '..config/conexao.js'

const Aluno = conexao.Schema({
    nome:'String',
    email: 'String',
    curso: [{
        type: 'String'
    }],
matricula:'String',
    foto:'String'
})
export default conexao.model('Aluno',Aluno)