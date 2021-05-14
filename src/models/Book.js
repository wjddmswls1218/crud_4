import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Book = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      requreind: true,
    },
    price: {
      type: Number,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `author`,
    },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model(`Book`, Book, `Book`);
