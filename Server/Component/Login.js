
import { signupModel } from "../Schema/userData.js";
// import bcrypt from "bcrypt";


export const login = async (request, response) => {
  const data = await signupModel.findOne({ userEmail: request.body.mail });
  // .then( (err, user) => {
    try{
      if (data) {

        if(data.userPassword == request.body.pass)
        {
          response.send("ok");
        }
        else{
          response.send("not matched");
        }
        // response.status(200).send("already exsist!");
      }
      else {
        response.status(400).send("no data");
      }

    }
    catch(err)
    {
      response.send(err);
    }
      
    
  // })



}