// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Tour from "./models/Tour.js";

dotenv.config();

// Use MongoDB Atlas URI if provided in .env, else fallback to local
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/tourdb";

// Sample tours (all fields match the Tour model)
const sampleTours = [
  {
    title: "Agra Fort Tour",
    city: "Agra",
    address: "Agra Fort, Agra, UP",
    distance: 10,
    price: 1200,
    maxGroupSize: 20,
    description: "Historic Agra Fort - UNESCO World Heritage site",
    photo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Agra_Fort.jpg",
  },
  {
    title: "Mumbai Heritage Walk",
    city: "Mumbai",
    address: "Colaba, Mumbai",
    distance: 5,
    price: 800,
    maxGroupSize: 10,
    description: "Explore colonial-era Mumbai with guided stories",
    photo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Gateway_of_India.jpg",
  },
  {
    title: "Goa Beach Getaway",
    city: "Goa",
    address: "Baga Beach, Goa",
    distance: 2,
    price: 2000,
    maxGroupSize: 12,
    description: "Relax and enjoy the scenic beaches of Goa",
    photo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Baga_Beach.jpg",
  },
  {
    title: "Jaipur Pink City Tour",
    city: "Jaipur",
    address: "Hawa Mahal, Jaipur",
    distance: 8,
    price: 1500,
    maxGroupSize: 15,
    description: "Discover Jaipur's forts, palaces and vibrant markets",
    photo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Hawa_Mahal.jpg",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to DB for seeding");

    await Tour.deleteMany({});
    console.log("🗑️ Old tours removed");

    await Tour.insertMany(sampleTours);
    console.log("🌱 Seeded tours successfully!");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
}

seed();