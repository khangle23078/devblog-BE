import { Schema, Types, model } from "mongoose";

const postModel = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    thumbnail: {
      url: {
        type: String,
        require: true,
      },
      public_id: {
        type: String,
        require: true,
      },
    },
    category: {
      type: Types.ObjectId,
      ref: "Category",
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export const post = model("Post", postModel);
