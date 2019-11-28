var socket = io();

//Escuchar sucesos
socket.on('connect', function(){
    console.log('conectado al servidor ');
});

//Escuchar sucesos
socket.on('disconnect', function(){
    console.log('Perdimos conexion con el servidor')
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Marco',
    mensaje: 'Hola Mundo'
}, function( resp ){
    console.log('respuesta server: ', resp);
});

//Escuchar Informacion en cliente
socket.on('enviarMensaje', function( mensaje ) {
    console.log('Servidor: ', mensaje)
});
