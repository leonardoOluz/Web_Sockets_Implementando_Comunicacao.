import registrarEventosCadastro from "./registrarEventos/cadastro.js";
import registrarEventosDesconectar from "./registrarEventos/desconectar.js";
import registrarEventosDocumento from "./registrarEventos/documento.js";
import registrarEventosInicio from "./registrarEventos/inicio.js";
import io from "./servidor.js";

io.on('connection', (socket) => {     

    registrarEventosInicio(socket, io)
    registrarEventosDocumento(socket, io)
    registrarEventosCadastro(socket, io)   
    registrarEventosDesconectar(socket, io)

})
