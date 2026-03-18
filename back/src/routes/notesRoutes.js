import express from 'express';
const router = express.Router();
// Ruta para obtener todas las notas
router.get("/", () => {
    console.log("Ruta de notas");
});
// Ruta para obtener una nota por su ID
router.get("/:id", (req, res) => {
    const id = req.params.id;
    console.log("Ruta de notas por id");
});
// Ruta para crear una nueva nota
router.post("/", (req, res) => {
    const {title, description} = req.body
    console.log(req.body);
    console.log(title, description);
    console.log("Ruta de notas por post");
});
// Ruta para eliminar una nota por su ID
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    console.log("Ruta de notas por delete");
} )
//editar una nota por su ID
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    console.log("Ruta de notas por put");
    console.log(updateData);
} )
export default router;