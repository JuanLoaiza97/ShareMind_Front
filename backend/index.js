import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Ruta para obtener todos los usuarios
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Ruta para crear usuario
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: "El email ya existe o datos inválidos" });
  }
});

app.listen(4000, () => console.log("🚀 Servidor corriendo en http://localhost:4000"));
