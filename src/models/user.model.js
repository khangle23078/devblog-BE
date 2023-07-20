import { Schema, model } from "mongoose";
import brycript from 'bcryptjs';

const userModel = new Schema({
  userName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER"
  }
})

userModel.pre('save', async function (next) {
  try {
    const salt = await brycript.genSalt(10)
    const hashPassword = await brycript.hash(this.password, salt);
    this.password = hashPassword;
    next()
  } catch (error) {
    next(error)
  }
})

export default model('User', userModel)