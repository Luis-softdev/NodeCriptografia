import { generateKeyPairSync, createSign, createVerify } from 'crypto';

const { publicKey, privateKey } = generateKeyPairSync('rsa', {

    modulusLength: 2048, 

    publicKeyEncoding: {
        type: 'spki', 
        format: 'pem' 
    },
    privateKeyEncoding: {
        type: 'pkcs8', 
        format: 'pem' 
    }
})

let dados = "Essa string vai ser assinada";

// Assinatura

const assinador = createSign('rsa-sha256');
assinador.update(dados);

const assinatura = assinador.sign(privateKey, 'hex');
console.log("Assinatura:", assinatura);

// Intermediário
// dados += 'Arquivo alterado'; // Alterando o arquivo fazendo com que a assinatura não seja mais válida

// Envio desse documento --- Documento, assinatura, chave pública
const verificador = createVerify('rsa-sha256');
verificador.update(dados);

const ehVerificado = verificador.verify(publicKey, assinatura, 'hex');
console.log("Assinatura Válida?", ehVerificado);