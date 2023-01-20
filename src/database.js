import mongoose from "mongoose";

//!Conexion a la DB
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1:27017/fazt")
    .then((db)=>{
        console.log('database is connected')
    })
    .catch((err)=>{
        console.log(err)
    })

