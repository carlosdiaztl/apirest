const express = require("express");
const app = express();
const connectDB = require("./config/db");
const Persona = require("./models/persona");
const cors = require("cors");
connectDB();

app.use(express.json());
app.use(cors());

app.post("/personas", async (req, res) => {
  try {
    await Persona.create({
      cedula: req.body.cedula,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
    });

    res.json({ msg: "Persona creada!" });
  } catch (error) {
    res.json({ msg: "error" });
    console.log(error);
    res.status(500).json({ msg: "Ha ocurrido un error al crear la persona" });
  }
});

app.get("/personas", async (req, res) => {
  try {
    const heroes = await Persona.find({});
    res.json(heroes);
  } catch (error) {
    console.log(error);
  }
});

app.get("/", (req, res) => {
  res.json({ mss: "Hello mami" });
});

app.listen(3000, console.log("Server running on Port 3000"));
