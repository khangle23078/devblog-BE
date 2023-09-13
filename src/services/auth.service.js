import { User } from "../models/user.model"

export const emailUserExits = (email) => {
  return User.findOne({ email: email }).exec()
}

export const loginUser = (data) => {
  return User.create(data)
}
