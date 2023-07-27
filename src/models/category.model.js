import { Schema, model } from "mongoose";

const categoryModel = new Schema({
  name: {
    type: String,
    require: true
  }
}, {
  timestamps: true
})

export default model('Category', categoryModel)