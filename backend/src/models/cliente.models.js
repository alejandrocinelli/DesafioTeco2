import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true 
    },

    apellido: {
        type: String,
        required: true,
        trim: true
    },

    sex: {
        type: String,
        required: true,
        trim: true,
   
    },

    dni: {
        type: String,
        required: true,
        trim: true,
       
       
    },
 
},
 {timestamps: true,}
);
 
export const Cliente = mongoose.model('cliente', userSchema);