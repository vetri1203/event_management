import { signupModel } from "../Schema/userData.js";

export const login = async (request, response) => {
  try {
    const {email, passwoord } = request.body; 
    if (email || !passwoord) {
      response.status(400).send({ message: "Enter all details" });
      return;
    }

    const user = await signupModel.findOne({ userEmail: email });

    if (user) {
      if (user.userPassword === passwoord) {
        response.status(200).send({ message: "Login successful" });
      } else {
        response.status(400).send({ message: "Password not matched" });
      }
    } else {
      response.status(400).send({ message: "No user found" });
    }
  } catch (err) {
    response.status(500).send({ message: err.message });
  }
};
