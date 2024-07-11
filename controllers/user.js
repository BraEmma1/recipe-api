import bcrypt from "bcrypt";
import { UserModel } from "../models/user.js";

export const register = async (req, res, next) => {
  try {
    //Hash user password
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    //Create a new user
   const user = await UserModel.create({
      ...req.body,
      password: hashedPassword,
    });
     //Generate a session
     req.session.user = { id: user.id }
    // REturn response
    res.status(201).json("User Registered Successfully");
  } catch (error) {
    next(error);
  }
};

// Function for loging in a User 
export const login = async (req, res, next) => {
  try {
    const { email,username,phone, password } = req.body;
    // find a user with their unique identifier
    // use $or to verify with variety identifier
    const user = await UserModel.findOne({
      $or: [
        { email: email },
        { username: username },
        { phone: phone }
      ]
    });
    if (!user) {
      res.status(401).json("User Not Found");
    } else {
      //verify their password
      const correctPassword = bcrypt.compareSync(password, user.password);
      if (!correctPassword) {
        res.status(401).json("Invalid credential");
      } else {
        //Generate a session
        req.session.user = { id: user.id }
        // Return a response
        res.status(200).json('User Logged in successful')
      }
    }
  } catch (error) {
    next(error)
  }

};
export const profile = async (req, res, next) => {
 try {
   //Find a User by Id 
   const user = await UserModel
     .findById(req.session.user.id)
     .select('-password');
   //Return response
   res.status(200).json(user);
 } catch (error) {
  next(error)
 }

};


export const logout = async (req, res, next) => {
  try {
    //Destroy user session
    await req.session.destroy();
    //Return response
    res.status(200).json('User Logged out')
  } catch (error) {
    next(error)
  }
 };

