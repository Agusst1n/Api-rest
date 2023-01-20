import jwt from "jsonwebtoken"
import confing from "../confing"
import User from "../models/User"

export const verifyToken = async (req,res,next)=>{

    try {
        
    const token = req.headers["x-access-token"]

    //!Ahora tengo que corroborar si el token es valido

    if(!token){
        return res.status(400).send({
            message: "No token provided"
        })
    }

    const tokenDecode = jwt.verify(token,confing.SECRET)

    req.userId = tokenDecode.id

    const userFound = await User.findById(req.userId, {password : 0})

    if(!userFound){
        return res.status(400).send({
            message: "No user found"
        })
    }

    next()

    } catch (error) {
        res.status(400).send({
            message: "Unauthorized"
        })
    }

}