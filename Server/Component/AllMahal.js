import { mahalModel } from "../Schema/MahalData.js";



export const allMahal = async (request,response)=>{
    try {
        const mahals = await mahalModel.find({});
        response.status(200).json(mahals);
      } catch (err) {
        console.error("Error retrieving Mahals:", err);
        response.status(500).json({ error: "Failed to retrieve Mahals" });
      }
}