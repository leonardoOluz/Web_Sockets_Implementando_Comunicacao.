function registrarEventosDesconectar(socket, io){
    socket.on("disconnect", (motivo) => {
        // console.log(`Cliente "${socket.id}" desconectado!
        // Motivo: ${motivo}`);
    });
}

export default registrarEventosDesconectar;