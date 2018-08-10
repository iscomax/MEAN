const mongoose = require('mongoose');//llamanos a mongoose

const URI = 'mongodb://localhost/mean-crud';//llamamos a la conexion URI Y ponemos la ruta de la 
                                            //base de datos a  la cual llamamos mean-crud
                                            
                                            
                                            
mongoose.connect(URI)
.then (db => console.log('DB is connected'))//condicion por consola cuando la base este conectada
.catch(err => console.error(err));//cuando la base np se pueda conectar

module.exports =  mongoose;//exportamos mongoose