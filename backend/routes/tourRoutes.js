// backend/routes/tourRoutes.js
import express from "express";
import {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";

const router = express.Router();

// GET /api/tours
router.get("/", getAllTours);

// GET /api/tours/:id
router.get("/:id", getTourById);

// POST /api/tours
router.post("/", createTour);

// PUT /api/tours/:id
router.put("/:id", updateTour);

// DELETE /api/tours/:id
router.delete("/:id", deleteTour);

export default router;
