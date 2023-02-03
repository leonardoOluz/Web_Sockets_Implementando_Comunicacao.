import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;
let documentoColecao;
const cliente = new MongoClient(`mongodb+srv://${dbUser}:${dbPass}@clusterleoluz.zoaawnu.mongodb.net/?retryWrites=true&w=majority`)

try {
    await cliente.connect();

    const db = cliente.db('alura-websockets');
    documentoColecao = db.collection('documentos')

    console.log(`conectado com banco de dados com sucesso!`)
} catch (error) {
    console.log(error)
}

export {documentoColecao};
