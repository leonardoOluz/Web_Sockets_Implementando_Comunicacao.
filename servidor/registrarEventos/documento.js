import { encontrarDocumento, atualizaDocumento, excluirDocumento } from '../config/documentosDb.js'

function registrarEventosDocumento(socket, io){
    socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento);

        const documento = await encontrarDocumento(nomeDocumento);
        if (documento) {
            devolverTexto(documento.texto)
        }
    })
    socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaDocumento(texto, nomeDocumento);

        if (atualizacao.modifiedCount) {
            socket.to(nomeDocumento).emit('texto_editor_clientes', texto)
        }

    });
    socket.on('excluir_documento',async (nomeDocumento) => {
        const resultado = await excluirDocumento(nomeDocumento)

        if (resultado.deletedCount) {
            io.emit("excluir_documento_sucesso", nomeDocumento)
        }
    })

}

export default registrarEventosDocumento;