import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex'); // Gera um sal aleatório
    const senhaHasheada = scryptSync(senha, sal, 64).toString('hex'); // Cria o hash com o sal
    return `${sal}:${senhaHasheada}`; // Retorna o sal e o hash concatenados`
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const heashesCorrespondem = timingSafeEqual(testeHash, hashReal);

            if (heashesCorrespondem) {
                console.log(`Usuário ${this.nome} autenticado com sucesso!`);
                return true;
            }
        }
        console.log(`Falha na autenticação do usuário ${this.nome}.`);
        return false;
    }
}

const luis = new Usuario('Luis', 'senhaLuis123');
console.log(luis);

// Testando a autenticação
luis.autentica('Luis', 'senhaLuis123'); // Autenticação bem-sucedida
luis.autentica('Luis', 'senhaLuisErrada'); // Falha na autenticação