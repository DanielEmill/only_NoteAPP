import express from 'express';
const app = express();
const PORT = 3000;

app.get("/api/notas", () => {
    console.log("Ruta de notas");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});