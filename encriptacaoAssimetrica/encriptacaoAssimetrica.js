import { generateKeyPairSync } from "crypto";

const { publicKey, privateKey } = generateKeyPairSync('rsa', {

    modulusLength: 2048, // Tamanho da chave em bits

    publicKeyEncoding: {
        type: 'spki', // Tipo da chave publica
        format: 'pem' // Formato da chave publica
    },
    privateKeyEncoding: {
        type: 'pkcs8', // Tipo da chave privada
        format: 'pem' // Formato da chave privada
    }
})

// console.log("Chave Pública:", publicKey);
// console.log("Chave Privada:", privateKey);

import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem Secreta para Encriptar")
)

console.log("Dados Criptografados:", dadosCriptografados.toString('hex'));

//  ------ Transmissão --------

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log("Dados Decifrados:", dadosDecifrados.toString('utf-8'));