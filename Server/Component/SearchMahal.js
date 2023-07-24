import { mahalModel } from "../Schema/MahalData.js";

// Function to search Mahals by Name
export const searchMahalByName = async (request, response) => {
  const { Name } = request.query;

  try {
    const mahals = await mahalModel.find({ Name: { $regex: Name, $options: "i" } });
    if(mahals.length >0)
        response.status(200).json(mahals);
    else response.status(404).send("No Mahals found..");
  } catch (err) {
    console.error("Error retrieving Mahals:", err);
    response.status(500).json({ error: "Failed to retrieve Mahals" });
  }
};

// Function to retrieve all Mahals
export const searchMahal = async (request, response) => {
  try {
    const mahals = await mahalModel.find({});
    response.status(200).json(mahals);
  } catch (err) {
    console.error("Error retrieving Mahals:", err);
    response.status(500).json({ error: "Failed to retrieve Mahals" });
  }
};
