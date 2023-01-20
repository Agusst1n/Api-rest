export const getUsers = (req,res) =>{
    res.status(200).send({
        status: "succes",
        users: {
            name: "Pepe",
            adrress: "Calle falsa 123"
        }
    })
}

export const getUserById = (req,res) =>{
    res.status(200).send({
        status: "succes",
        users: {
            name: "Pepe2",
            adrress: "Calle falsa 123"
        }
    })
}

export const createUsers = (req,res) =>{

}

export const updateUsers = (req,res) =>{

}

export const deleteUsers = (req,res) =>{

}