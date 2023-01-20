import User from "../models/User";
import Jwt from "jsonwebtoken";
import config from "../confing";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({
      name: username,
      email,
      password: await User.encryptPassword(password),
    });
    // const user = new User()

    // user.name = username
    // user.email = email
    // user.password = await User.encryptPassword(password)

    let userSave = await user.save();

    //TODO creando el token
    //!Que voy a guardar  //palabra secreta
    const token = Jwt.sign({ id: userSave._id }, config.SECRET, {
      //!config
      expiresIn: 86400, //24 hours
    });

    res.status(200).send({
      status: "Success",
      token,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: error,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const userFound = await User.findOne({ email: req.body.email });

    if (!userFound) return res.status(400).send({ message: "User not found" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(400).send({ message: "Password incorrect" });

    // console.log(userFound, '333333333')
    let token = Jwt.sign({id: userFound._id}, config.SECRET,{
      expiresIn: 86400
    })

    res.status(200).send({
      status: "Success",
      token
    });
    
  } catch (error) {
    res.status(400).send({
      message: error,
    });
  }
};
