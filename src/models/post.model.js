import { Schema, Types, model } from "mongoose";

const postModel = new Schema({
  title: {
    type: String,
    require: true
  },
  categories: [
    {
      type: Types.ObjectId,
      ref: 'category'
    }
  ],
  author: {
    type: Types.ObjectId,
    ref: 'user'
  },
  content: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

export const post = model('post', postModel)

