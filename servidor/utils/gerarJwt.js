import  Jwt  from "jsonwebtoken";
const secret = process.env.SECRET;

function gerarJwt(payload){

const tokenJwt = Jwt.sign(payload, secret, {expiresIn: "1h"})
return tokenJwt

}

export default gerarJwt;