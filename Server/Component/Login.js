
import { signupModel } from "../Schema/userData.js";
// import bcrypt from "bcrypt";


export const login = async (request, response) => {

  try {
    const {mail,pass}  = request.body
    if (!mail || !pass) {
      response.send("enter all details");
      return;
    }


    const user = await signupModel.findOne({ userEmail: request.body.mail });

    if (user) {
      if (user.userPassword === pass) {
        response.status(200).send("ok");
      }
      else {
        response.send("password not matched");
      }
    }
    else {
      response.send("no user found");
    }
  }
  catch (err) {
    response.send(err)
  }


}