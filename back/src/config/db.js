import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI;

    if (!dbUri) {
      throw new Error("MONGODB_URI no está definida en .env");
    }

    await mongoose.connect(dbUri);
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectarse a la DB:", error);
    process.exit(1);
  }
};
