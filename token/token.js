import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
    {
        apelido: "Luis",
        curso: "Engenharia de Software",
    }, chaveSecreta
)

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta); 
console.log(tokenDecodificado);