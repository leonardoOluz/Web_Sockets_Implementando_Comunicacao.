import { removerConexao } from "../utils/conexoesDocumentos.js";

function registrarEventosDesconectar(socket, io, {nomeDocumento, nomeUsuario} =''){
    socket.on("disconnect", (motivo) => {
        removerConexao(nomeDocumento,nomeUsuario)
    });
}

export default registrarEventosDesconectar;