import { mahalModel } from "../Schema/MahalData.js";

export const mahal = async (request, response) => {
  const { Name, seat, room } = request.body; // Corrected req to request

  // Create a new Mahal entry using the Mongoose model
  const newMahal = new mahalModel({ Name, seat, room });

  try {
    const savedMahal = await newMahal.save();
    // console.log("Mahal saved successfully:", savedMahal);
    response.status(201).json(savedMahal);
  } catch (err) {
    console.error("Error saving Mahal:", err);
    response.status(500).json({ error: "Failed to save Mahal" });
  }
};
