const socket = io();

function emitirCadastrarUsuario(dados) {
    socket.emit("cadastrar_usuario", dados)
}
socket.on('Cadastro_sucesso', () => {
    alert('Cadastro realizado com sucesso!')
    window.location.href = '../login/index.html'
})
socket.on('cadastro_erro', () => alert('Erro no cadastro!'))
socket.on('usuario_existente', ()=> alert('Usuário existente!'))

export { emitirCadastrarUsuario };
