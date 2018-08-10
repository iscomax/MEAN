const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{//ejemplo de una ruta 
  //  res.send("hola mundo");hay que declarar la ruta en el indexs
    res.json({
        status:'api trabajando' //aqui llamamos y mostramos un archivo json
    });
});

module.exports =  router;
