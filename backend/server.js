import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.get("/", (req, res) => res.send("Tour backend running"));
// TODO: add routes and controllers
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
