import express from "express";
import dotenv from "dotenv";
dotenv.config();
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.use("/api/notas", notesRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
