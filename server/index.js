const express = require('express')
const morgan = require('morgan')//instalamos con npm install morgan es un modulo interaccion usuario consola
const app = express();

const { mongoose } = require('./database')//llamamos al archivo database






//configuracion del servidor settings

app.set('port', process.env.PORT||3000 );//puerto donde se ejecuta la aplicacion creamos la variable 
                                        //CON process.env.PORT LE DECIMOS QUE TOME EL PUERTO DE LA NUBE Y CON LAS | |  SI NO LO ENCUENTRA TOMARA E PUERTO 3000



//funciones para procesar los datos middlewares


app.use(morgan('dev'));//npm run dev en sonsola get /404
app.use(express.json());//para que corra los json



//rutas sel servidor routes

app.use('/api/employees',require('./routes/employee.routes'));//llamas al archivo employeer que muesta las rutas el cual mostrara el mensaje 
    ///api/employees  es la ruta especifica donde se mostrara la infomacion

//seccion que inicializa el servidor  starting the server

app.listen(app.get('port'), ()=>{//llamamos la variable 
    console.log('server en el puerto', app.get('port'));
});