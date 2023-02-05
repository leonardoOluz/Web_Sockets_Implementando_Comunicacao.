import jwt from 'jsonwebtoken';

function autorizarUsuario(socket, next){

    const tokenJwt = socket.handshake.auth.token;
    
    try {
        const payLoadToken = jwt.verify(tokenJwt, process.env.SECRET)

        socket.emit('autorizacao_sucesso', payLoadToken);
        
        next();
    } catch (error) {
        next(error);
    }
}

export default autorizarUsuario;
