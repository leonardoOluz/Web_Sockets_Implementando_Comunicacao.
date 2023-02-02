import { documentoColecao } from "./config/dbConnect.js";

function encontrarDocumento(nome) {
    const documento = documentoColecao.findOne({
        nome: nome
    })

    return documento;
}
function atualizaDocumento(texto, nomeDocumento) {
    const atualizacao = documentoColecao.updateOne(
        {
            nome: nomeDocumento,
        }, {
        $set: {
            texto,
        }
    })
    return atualizacao;
}
function obterDocumentos() {
    const documentos = documentoColecao.find().toArray();
    return documentos;
}
function adicionarDocumento(nome) {
    const resultado = documentoColecao.insertOne({
        nome,
        texto: `texto de ${nome} ...`
    })
    return resultado;
}
function excluirDocumento(nome) {
const resultado = documentoColecao.deleteOne({nome: nome})
return resultado;
}

export {
    encontrarDocumento,
    atualizaDocumento,
    obterDocumentos,
    adicionarDocumento,
    excluirDocumento
};