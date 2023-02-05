import jwt from 'jsonwebtoken';

function autorizarUsuario(socket, next){

    const tokenJwt = socket.handshake.auth.token;
    
    try {
        jwt.verify(tokenJwt, process.env.SECRET)
        next();
    } catch (error) {
        next(error);
    }
}

export default autorizarUsuario;
