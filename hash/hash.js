import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('Uma string qualquer'));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log(`Usuário ${this.nome} autenticado com sucesso!`);
            return true;
        }

        console.log(`Falha na autenticação do usuário ${this.nome}.`);
        return false;
    }
}


const usuario = new Usuario('joao', 'senhajoaosembraco');
console.log(usuario);

usuario.autentica('joao', 'senhajoaosembraco'); // Autenticação bem-sucedida
usuario.autentica('joao', 'senhajoaosembracoerrada'); // Falha na autenticação

