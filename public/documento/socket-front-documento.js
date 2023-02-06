/* Imports */
import { obterCookie } from "../utils/cookies.js";
import { atualizaTextoEditor, alertarERedirecionar, tratarAutorizacaoSucesso, atualizarInterfaceUsuarios } from "./documento.js";


const socket = io('/usuarios', {
    auth: {
        token: obterCookie('tokenJwt')
    }
});

socket.on('autorizacao_sucesso', tratarAutorizacaoSucesso);

socket.on('connect_error', (erro) => {
    alert(erro)
    window.location.href = '/login/index.html';
})

function selecionarDocumento(dadosEntrada) {
    socket.emit('selecionar_documento', dadosEntrada, (texto) => {
        atualizaTextoEditor(texto)
    })
}

socket.on('usuario_ja_no_documento',()=>{
    alert(`Documento aberto em outra página.`);
    window.location.href = '/';
})

socket.on('usuarios_no_documento', atualizarInterfaceUsuarios)

function emitirTextoEditor(dados) {
    socket.emit('texto_editor', dados);
}

socket.on('texto_editor_clientes', (texto) => {
    atualizaTextoEditor(texto);
})

function emitirExcluirDocumento(nomeDocumento) {
    socket.emit('excluir_documento', nomeDocumento);
}

socket.on('excluir_documento_sucesso', (nome) => {
    alertarERedirecionar(nome);
})

/* export */
export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };