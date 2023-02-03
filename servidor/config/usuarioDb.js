import criarHashESalSenha from "../utils/criarHashESalSenha.js";
import { usuarioColecao } from "./dbConnect.js";

function cadastraUsuario({nome, senha}){    
    const {hashSenha, salSenha} = criarHashESalSenha(senha)
    return usuarioColecao.insertOne({nome, hashSenha, salSenha})
}
function encontrarUsuario(nome){
    return usuarioColecao.findOne({nome: nome})
}

export {cadastraUsuario, encontrarUsuario};