/* Importando bibliotecas e frameworks de desenvolvimento  */
import express from "express";
import url from 'url';
import path from "path";
import http from 'http';
import { Server } from "socket.io";
import './config/dbConnect.js'

/* Variáveis*/
const app = express();
const port = process.env.PORT || 3000
const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, '../..', 'public');
const servidorHttp = http.createServer(app)

/* Passando o uso do express.static para app.use identificar a pasta public com os html */

app.use(express.static(diretorioPublico));

servidorHttp.listen(port, ()=> {
    console.log(`escuntando servidor na porta http://localhost:${port}`)
})

const io = new Server(servidorHttp);

export default io;

