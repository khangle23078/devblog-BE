import User from './../models/user.model.js'

export const registerUser = (data) => {
  return User.create(data)
}