import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from "./socket-front-documento.js";

const parammetros = new URLSearchParams(window.location.search);
const nomeDocumento = parammetros.get('nome');
const tituloDocumento = document.getElementById('titulo-documento')
const textoEditor = document.getElementById('editor-texto');
const botaoExcluir = document.getElementById('excluir-documento');
const listaUsuariosConectados = document.getElementById('usuarios-conectados')


tituloDocumento.textContent = nomeDocumento || `Documento sem título`;

function tratarAutorizacaoSucesso(payloadToken) {
    selecionarDocumento({ nomeDocumento, nomeUsuario: payloadToken.nomeUsuario })
}

function atualizarInterfaceUsuarios(usuariosNoDocumento) {
    listaUsuariosConectados.innerHTML = ``;
    
    usuariosNoDocumento.forEach((usuario) => {
        listaUsuariosConectados.innerHTML += `
        <li class="list-group-item">${usuario}</li>
        `
    });

}

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

botaoExcluir.addEventListener('click', () => {
    emitirExcluirDocumento(nomeDocumento)
})
function alertarERedirecionar(nome) {
    if (nome === nomeDocumento) {
        alert(`Documento ${nome} excluído!`)
        window.location.href = '/';
    }

}

export { atualizaTextoEditor, alertarERedirecionar, tratarAutorizacaoSucesso, atualizarInterfaceUsuarios };