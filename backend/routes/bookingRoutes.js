// backend/routes/bookingRoutes.js
import express from "express";
import { createBooking, getUserBookings } from "../controllers/bookingController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Create a booking (protected)
router.post("/", auth, createBooking);

// Get bookings for logged-in user (protected)
router.get("/me", auth, getUserBookings);

export default router;   // ✅ default export
