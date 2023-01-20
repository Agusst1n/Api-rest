import {Schema, model} from "mongoose"
import bcryptjs from "bcryptjs"

const userSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        required: true,
        type: String
    },
    rol:[{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})


userSchema.statics.encryptPassword = async (password) =>{
    //!Agarra la password y la encripta con un algoritmo de 10 vueltas
    return await bcryptjs.hash(password, 10)
}

userSchema.statics.comparePassword = async (password, recivedPassword) =>{
    //!Compara y retorna true o false segun si se cumple o no
    return await bcryptjs.compare(password, recivedPassword)
}

export default model("User", userSchema)