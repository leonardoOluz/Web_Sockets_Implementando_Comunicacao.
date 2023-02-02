import { documentoColecao } from "./config/dbConnect.js";

function encontrarDocumento(nome) {
    const documento = documentoColecao.findOne({
        nome: nome
    })

    return documento;
}
function atualizaDocumento(texto,nomeDocumento) {
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
function obterDocumentos(){
    const documentos = documentoColecao.find().toArray();
    return documentos;
}
export { encontrarDocumento, atualizaDocumento, obterDocumentos };