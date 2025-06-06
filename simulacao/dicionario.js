import { createHash } from 'crypto';

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha);
    }
    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex');
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log(`Usuário ${this.nome} autenticado com sucesso!`);
            return true;
        }

        //console.log(`Falha na autenticação do usuário ${this.nome}.`);
        return false;
    }
}


const usuario = new Usuario('joao', 'senha123');

const senhasComuns = ["123456", "senha123", "qwerty", "abc123", "password", "letmein", "12345678", "12345", "123456789", "1234567"];

senhasComuns.map(senha => {
    if (usuario.autentica("joao", senha)) {
        console.log(`Senha encontrada: ${senha}`);
    }
})