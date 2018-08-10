const mongoose = require('mongoose');//requerimos a mongoose

const { Schema } = mongoose; //solicitamos los esquemas de mongoose como los define 
 

//modelamos los datos 
//mediante la constante EmployyeeSchema
const EmployeeSchema = new Schema ({
    name : {type: String, required:true},
    position:{type: String, required: true },
    office:{type: String,required: true},
    salary: {type: Number, required: true}
});

//como se guarda el esquema en la base de datos mongoose

module.exports = mongoose.model('Employee', EmployeeSchema);