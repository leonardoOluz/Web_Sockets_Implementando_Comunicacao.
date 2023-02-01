/* Imports */
import { atualizaTextoEditor } from "./documento.js";
/* Variaveis */
const socket = io();

function selecionarDocumento(nome){
    socket.emit('selecionar_documento', nome)
}

/* Funções */
function emitirTextoEditor(texto) {
    socket.emit('texto_editor', texto);
}
/* Metodo socket.on */
socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto);
})

/* exprot */
export { emitirTextoEditor, selecionarDocumento };