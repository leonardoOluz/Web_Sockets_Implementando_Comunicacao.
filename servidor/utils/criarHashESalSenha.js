/* Import do modulo crypto do Node */
import {randomBytes, scryptSync } from 'crypto';

/* Criando função para Sal e Hash de senhas */
function criarHashESalSenha(senhaDigitada){

    const salSenha = randomBytes(16).toString('hex');

    const hashSenha = scryptSync(senhaDigitada, salSenha, 64).toString('hex')

    return {salSenha, hashSenha}

}

export default criarHashESalSenha;