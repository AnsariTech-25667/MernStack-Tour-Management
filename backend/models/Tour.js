import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Tour title is required"],
      unique: true,
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    distance: {
      type: Number,
      required: [true, "Distance is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      default: 0,
    },
    maxGroupSize: {
      type: Number,
      required: [true, "Max group size is required"],
    },
    photo: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review",
      },
    ],
  },
  { timestamps: true }
);

// Optional: cascade delete reviews when a tour is deleted
tourSchema.pre("remove", async function (next) {
  await this.model("Review").deleteMany({ tourId: this._id });
  next();
});

export default mongoose.model("Tour", tourSchema);
