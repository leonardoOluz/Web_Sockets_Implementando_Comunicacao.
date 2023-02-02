/* Imports */
import { atualizaTextoEditor } from "./documento.js";
/* Variaveis */
const socket = io();

/* Funções */
function selecionarDocumento(nome) {
    socket.emit('selecionar_documento', nome, (texto) => {
        atualizaTextoEditor(texto)    
    })
}
function emitirTextoEditor(dados) {
    socket.emit('texto_editor', dados);
}

/* Metodo socket.on escutando texto editor clientes */
socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto);
})

/* export */
export { emitirTextoEditor, selecionarDocumento };