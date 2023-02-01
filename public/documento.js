import { emitirTextoEditor, selecionarDocumento } from "./socket-front-documento.js";

const parammetros = new URLSearchParams(window.location.search);
const nomeDocumento = parammetros.get('nome');
const tituloDocumento = document.getElementById('titulo-documento')
const textoEditor = document.getElementById('editor-texto');


tituloDocumento.textContent = nomeDocumento || `Documento sem título`;
selecionarDocumento(nomeDocumento);

textoEditor.addEventListener('keyup', () => {
    emitirTextoEditor({
        texto: textoEditor.value,
        nomeDocumento
    })
})

function atualizaTextoEditor(texto) {
    textoEditor.value = texto;
}

export { atualizaTextoEditor };