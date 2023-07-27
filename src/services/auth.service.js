import { user } from "../models/user.model"

export const emailUserExits = (email) => {
  return user.findOne({ email: email }).exec()
}

export const loginUser = (data) => {
  return user.create(data)
}
