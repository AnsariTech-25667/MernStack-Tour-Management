import Booking from "../models/Booking.js";
import Tour from "../models/Tour.js";

// Create a new booking
export const createBooking = async (req, res) => {
  try {
    const userId = req.user.id;
    const { tourId, seats } = req.body;

    if (!tourId) return res.status(400).json({ message: "tourId is required" });

    const tour = await Tour.findById(tourId);
    if (!tour) return res.status(404).json({ message: "Tour not found" });

    const amount = (tour.price || 0) * (seats || 1);

    const booking = await Booking.create({
      user: userId,
      tour: tourId,
      seats: seats || 1,
      amount,
    });

    res.status(201).json({ booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get bookings for logged-in user
export const getUserBookings = async (req, res) => {
  try {
    const userId = req.user.id;
    const bookings = await Booking.find({ user: userId }).populate("tour");
    res.json({ bookings });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
