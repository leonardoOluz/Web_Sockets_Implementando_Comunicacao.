import io from "./servidor.js";

io.on('connection', (socket)=>{
    console.log(`Um cliente se conectou! com o id: ${socket.id}`)
})
