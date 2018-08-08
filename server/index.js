const express = require('express')
const morgan = require('morgan')//instalamos con npm install morgan es un modulo interaccion usuario consola
const app = express();

//configuracion del servidor settings

app.set('port', process.env.PORT||3000 );//puerto donde se ejecuta la aplicacion creamos la variable 
                                        //CON process.env.PORT LE DECIMOS QUE TOME EL PUERTO DE LA NUBE Y CON LAS | |  SI NO LO ENCUENTRA TOMARA E PUERTO 3000

//funciones para procesar los datos middlewares=
app.use(morgan('dev'));//npm run dev
app.use(express.json());//para que corra los json



//rutas sel servidor routes

//seccion que inicializa el servidor  starting the server

app.listen(app.get('port'), ()=>{//llamamos la variable 
    console.log('server en el puerto', app.get('port'));
});