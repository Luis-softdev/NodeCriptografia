const mensagemSecreta = "minhaamensagemsecreta";

console.log(mensagemSecreta);

// Função para cifrar a mensagem
function cifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere + movimentos);
    })

    return mensagemCifrada.join('');
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);
console.log(mensagemCifrada);

// Função para decifrar a mensagem
function decifraMensagem(mensagem, movimentos) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codigoCaractere = caractere.charCodeAt(0);
        return String.fromCharCode(codigoCaractere - movimentos);
    })

    return mensagemCifrada.join('');
}

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);
console.log(mensagemDecifrada);