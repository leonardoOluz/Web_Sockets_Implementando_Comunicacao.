/* Imports */
import { atualizaTextoEditor } from "./documento.js";
/* Variaveis */
const socket = io();
/* Funções */
function emitirTextoEditor(texto) {
    socket.emit('texto_editor', texto);
}
/* Metodo socket.on */
socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto);
})

/* exprot */
export { emitirTextoEditor };