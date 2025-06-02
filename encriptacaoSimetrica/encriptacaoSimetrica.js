import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = "minha mensagem secreta";
const chave = randomBytes(32); // Chave de 256 bits
const vi = randomBytes(16); // Vetor de inicialização (IV) de 128 bits

const cifra = createCipheriv('aes256', chave, vi);
const mensagemCrifrada = cifra.update(mensagem, 'utf8', 'hex') + cifra.final('hex');  // Criptografa a mensagem

console.log(`Mensagem Criptografada: ${mensagemCrifrada}`);

// Transmissão ------ chave, vi, mensagemCrifrada

// Descriptografando a mensagem

const decifra = createDecipheriv('aes256', chave, vi);
const mensagemDecifrada = decifra.update(mensagemCrifrada, 'hex', 'utf8') + decifra.final('utf8'); // Descriptografa a mensagem

console.log(`Mensagem Descriptografada: ${mensagemDecifrada.toString('utf8')}`);