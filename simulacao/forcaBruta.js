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


const usuario = new Usuario('joao', '1325');

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
    if(usuario.autentica("joao", senhaTeste.toString().padStart(4, '0'))) {
        console.log(`Senha encontrada: ${senhaTeste}`);
    }
}